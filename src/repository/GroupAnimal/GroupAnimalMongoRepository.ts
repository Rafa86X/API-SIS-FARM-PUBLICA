/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request} from 'express';
import { HttpResponse, IRepository } from '../protocols';
import { IGroupAnimal } from '../../models/GroupAnimal/IGroupAnimal';
import GroupAnimal from '../../models/GroupAnimal/GroupAnimal';


export class GroupAnimalkMongoRepository implements IRepository{


    async getAll():Promise<HttpResponse<IGroupAnimal[] | string>> {
        
        try {
            
            const animals = await GroupAnimal.find();             

            if(animals.length === 0){
                throw new Error('There are no registered animals.');
            }           
            return{
                statusCode:200,
                send:animals as IGroupAnimal[]
            };
        } catch (error) {
            return{
                statusCode:400,
                send:error.mensage
            };
            
        }
    }


    async create(data:IGroupAnimal):Promise<HttpResponse<IGroupAnimal|string >> {
        
        try {
            
            const animal = new GroupAnimal(data);

            const exists = await GroupAnimal.find({ name: data.name });
   
            if(exists.length > 0){
                throw new Error(`O nome de animal >> ${data.name} << já esta em uso.`);
            }

            const newAnimals = await  animal.save();
            
            return{
                statusCode:200,
                send: newAnimals as IGroupAnimal
            };

        } catch (error) {
            return{
                statusCode:400,
                send:error.message
            };
            
        }
    }

    async update(req:Request):Promise<HttpResponse<IGroupAnimal|string >> {
        
        try {
            
            const id = req.params.id;
            
            const testID = await GroupAnimal.findById(id);

            if(!testID){
                throw new Error(`There is noGroupAnimal registered with this ID ${id}`);
            }

            await GroupAnimal.findByIdAndUpdate(id, {$set: req.body});
            const item = await GroupAnimal.findById(id);
            
            return{
                statusCode:200,
                send: item as IGroupAnimal
            };

        } catch (error) {
            return{
                statusCode:404,
                send:error.message
            };
            
        }
    }

    async delete(req:Request):Promise<HttpResponse<IGroupAnimal|string >> {
        
        try {
            
            const id = req.params.id;
            
            const testID = await GroupAnimal.findById(id);

            if(!testID){
                throw new Error(`There is no Animal registered with this ID ${id}`);
            }

            await GroupAnimal.findByIdAndDelete(id);
            
            const testIDdeleted = await GroupAnimal.findById(id);

            let message = '';

            if(!testIDdeleted){
                message = 'Animal deleted successfully';
            }else{
                message = 'Unable to delete Animal';
            }
            
            return{
                statusCode:200,
                send: message as string,
            };

        } catch (error) {
            return{
                statusCode:404,
                send:error.message
            };
            
        }
    }
    
    async getOne(req:Request):Promise<HttpResponse<IGroupAnimal|string >> {
        
        try {
            
            const id = req.params.id;       
            
            const groupanimal = await GroupAnimal.findById(id);
            
            if(!groupanimal){
                throw new Error('AnimalDog not found');
            }
            
            return{
                statusCode:200,
                send: groupanimal as IGroupAnimal
            };

        } catch (error) {
            return{
                statusCode:404,
                send:error.message
            };
            
        }
    }
}