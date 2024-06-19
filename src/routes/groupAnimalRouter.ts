import express from 'express';
import { Pager } from '../middleware/pager';
import { GroupAnimalController } from '../controllers/GroupAnimal';


const app = express();
const controller = new GroupAnimalController();

app.get('/groupanimal', controller.getAll, Pager.runPage)
    .post('/groupanimal', controller.create)
    .patch('/groupanimal/:id', controller.update)
    .delete('/groupanimal/:id', controller.delete)
    .get('/groupanimal/:id', controller.getOne);


export default app;