import express from 'express';
import { Segurity } from '../security/Segurity';


const app = express();

app.use(Segurity.autenticater);


export default app;