import { Request} from 'express';
import { HttpResponse, IRepository, IRepositoryPharmaco } from '../protocols';
import { IPharmaco } from '../../models/Pharmaco/IPharmaco';
import Pharmaco from '../../models/Pharmaco/Pharmaco';


export class PharmacoMongoRepository implements IRepository, IRepositoryPharmaco{

    async getAllForAnimal(req:Request):Promise<HttpResponse<IPharmaco | string>> {
        

        try {
            
            const id = req.params.id;

            
     
            const pharmaco = await Pharmaco.find({  animal_id : id });


            if(pharmaco.length==0){
                throw new Error('Pharmaco not found');
            }

            return{
                statusCode:200,
                send:pharmaco as unknown as IPharmaco
            };

        } catch (error) {
            return{
                statusCode:404,
                send:error.message
            };
            
        }
    }

    async getAll():Promise<HttpResponse<IPharmaco[] | string>> {
        
        throw new Error('This method should not be used for this route.');
    }


    async create(data:IPharmaco):Promise<HttpResponse<IPharmaco|string >> {
        
        try {
            
            const pharmaco = new Pharmaco(data);

            const newPharmaco = await  pharmaco.save();
            
            return{
                statusCode:200,
                send: newPharmaco as IPharmaco
            };

        } catch (error) {
            return{
                statusCode:400,
                send:error.message
            };
            
        }
    }

    async getOne(req:Request):Promise<HttpResponse<IPharmaco|string >> {
        
        const id = req.params.id;
        throw new Error('This method should not be used for this route.' + id);
    }

    async update(req:Request):Promise<HttpResponse<IPharmaco|string >> {
        
   
        const id = req.params.id;
        throw new Error('This method should not be used for this route.' + id);
            
            
    }

    async delete(req:Request):Promise<HttpResponse<IPharmaco|string >> {
        
        const id = req.params.id;
        throw new Error('This method should not be used for this route.' + id);
    }

    
}