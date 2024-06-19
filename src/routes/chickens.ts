import  express  from 'express';
import { ChickensController } from '../controllers/ChikensController';


const app = express();
const controller = new ChickensController();

app.get('/chickens',controller.getAll)
    .patch('/chickens',controller.update);

export default app;