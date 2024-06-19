import { Request, Response } from 'express';
import { IController } from './protocols';
import { PharmacoMongoRepository } from '../repository/Pharmaco/PharmoMongoRepository';
import { ValidatorPharmaco } from '../validators/specific/validatorPharmaco';


export class PharmacoController implements IController{


    async getAll(req,res:Response, next):Promise<Response> {
        
        try {
            const repository = new PharmacoMongoRepository();

            

            const many = await repository.getAllForAnimal(req);
            req.many = many;
            next();
            
           
            

        } catch (error) {
            return res.status(400).json({message: error.message});
        }      
    }

    async getOne(req:Request,res:Response):Promise<Response> {

        
        try {
            const repository = new PharmacoMongoRepository();

            const one = await repository.getOne(req);
            res.status(one.statusCode).json(one.send);
        } catch (error) {
            return res.status(400).json({message: error});
        }      
    }

    async create(req:Request,res:Response):Promise<Response> {
        try {

            const data = req.body;
            const repository = new PharmacoMongoRepository();

            ValidatorPharmaco.valid(data);

            const registered = await repository.create(data);
            
            res.status(registered.statusCode).json(registered.send);

        } catch (error) {
            return res.status(400).json({message: error.message});
        }      
    }

    async update(req:Request,res:Response):Promise<Response> {


        try {
            const data = req.body;
            const repository = new PharmacoMongoRepository();

            ValidatorPharmaco.valid(data);


            const updated = await repository.update(req);

            res.status(updated.statusCode).json(updated.send);
        } catch (error) {
            return res.status(400).json({message: error.message});
        }      
    }

    async delete(req:Request,res:Response):Promise<Response> {

        
        try {
            const repository = new PharmacoMongoRepository();

            const resp = await repository.delete(req);
            res.status(resp.statusCode).json(resp.send);
        } catch (error) {
            return res.status(400).json({message: error});
        }      
    }

}

