import  express  from 'express';
import { UserController } from '../controllers/UserController';


const app = express();
const controller = new UserController();

app.post('/login',controller.login);


export default app;