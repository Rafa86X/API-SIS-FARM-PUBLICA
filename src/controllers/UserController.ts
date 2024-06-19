import { Request, Response } from 'express';
import { IController } from './protocols';
import { UserMongoRepository } from '../repository/User/UserMongoRepository';
import { Segurity } from '../security/Segurity';

export class UserController implements IController{


    async getAll(req:Request,res:Response):Promise<Response> {
        
        try {
            const repository = new UserMongoRepository();
            const many = await repository.getAll();
            res.status(many.statusCode).json(many.send);
        } catch (error) {
            return res.status(400).json({message: error.message});
        }      
    }

    async getOne(req:Request,res:Response):Promise<Response> {

        
        try {
            const repository = new UserMongoRepository();

            const one = await repository.getOne(req);
            res.status(one.statusCode).json(one.statusCode);
        } catch (error) {
            return res.status(400).json({message: error});
        }      
    }

    async login(req:Request,res:Response):Promise<Response> {
        try {
            
            const data = req.body;



            const one = await Segurity.testPassWord(data);
            
            res.status(200).json(one);

        } catch (error) {
            return res.status(400).json({message: error.message});
        }      
    }

    async create(req:Request,res:Response):Promise<Response> {
        try {

            //   const data = req.body;
            // const repository = new UserMongoRepository();

            //  const registred = await repository.create(data);
            
            //res.status(registred.statusCode).json(registred.send);

        } catch (error) {
            return res.status(400).json({message: error.message});
        }      
    }

    async update(req:Request,res:Response):Promise<Response> {


        try {
            // const data = req.body;
            // const repository = new UserMongoRepository();



            // const updated = await repository.update(req);

            // res.status(updated.statusCode).json(updated.send);
        } catch (error) {
            return res.status(400).json({message: error.message});
        }      
    }

    async delete(req:Request,res:Response):Promise<Response> {

        
        try {
            // const repository = new UserMongoRepository();

            // const deleted = await repository.delete(req);
            // res.status(deleted.statusCode).json(deleted.send);
        } catch (error) {
            return res.status(400).json({message: error});
        }      
    }

}

