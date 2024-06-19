import express from 'express';
import wellCome from './wellCome';
import chickensController from './chickens';
import login from './loginRoute';
import authRote from './authRote';
import pharmaco from './pharmacoRoute';
import groupAnimal from './groupAnimalRouter';
const app = express();

app.use(
    wellCome,
    login,
    authRote,
    chickensController,
    pharmaco,
    groupAnimal
);


export default app;