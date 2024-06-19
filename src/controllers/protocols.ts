import { Request, Response } from 'express';

export interface IController{
    getAll(req,res,next?):Promise<Response>
    getOne(req:Request,res:Response):Promise<Response>
    create(req:Request,res:Response):Promise<Response>
    update(req:Request,res:Response):Promise<Response>
    delete(req:Request,res:Response):Promise<Response>

}
