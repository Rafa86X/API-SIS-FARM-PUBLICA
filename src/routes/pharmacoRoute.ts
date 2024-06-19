import express from 'express';
import { PharmacoController } from '../controllers/PharmacoController';
import { Pager } from '../middleware/pager';


const app = express();
const controller = new PharmacoController();

app.post('/pharmaco', controller.create)
    .get('/pharmaco/:id', controller.getAll, Pager.runPage);


export default app;