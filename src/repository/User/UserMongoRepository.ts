import { Request} from 'express';
import { HttpResponse, IRepository } from '../protocols';
import { IUser } from '../../models/User/IUser';
import User from '../../models/User/User';


export class UserMongoRepository implements IRepository{

    
    async getAll():Promise<HttpResponse<IUser[] | string>> {
        
        try {
            
            const users = await User.find({});             

            if(users.length === 0){
                throw new Error('There are no registered animals.');
            }           
            return{
                statusCode:200,
                send: users as IUser[]
            };
        } catch (error) {
            return{
                statusCode:400,
                send:error.mensage
            };
            
        }
    }


    async create(data:IUser):Promise<HttpResponse<IUser|string >> {
        
        try {
            
            let newUser = new User(data);

            newUser = await newUser.save();
            
            return{
                statusCode:200,
                send: newUser as IUser
            };

        } catch (error) {
            return{
                statusCode:400,
                send:error.message
            };
            
        }
    }

    async update(req:Request):Promise<HttpResponse<IUser|string >> {
        
        try {
            
            const id = req.params.id;
            
            const testID = await User.findById(id);

            if(!testID){
                throw new Error(`There is no User registered with this ID ${id}`);
            }

            await User.findByIdAndUpdate(id, {$set: req.body});
            const item = await User.findById(id);
            
            return{
                statusCode:200,
                send: item as IUser
            };

        } catch (error) {
            return{
                statusCode:404,
                send:error.message
            };
            
        }
    }

    async delete(req:Request):Promise<HttpResponse<IUser|string >> {
        
        try {
            
            const id = req.params.id;       

            const testID = await User.findById(id);

            if(!testID){
                throw new Error(`There is no User registered with this ID ${id}`);
            }


            await User.findByIdAndDelete(id);
            
            const users = await User.findById(id);
            let mensage = '';
            
            if(!users){
                mensage='Animal deleted successfully';
            }
            else{
                mensage='Unable to delete Animal';
            }

            return{
                statusCode:200,
                send: mensage
            };

        } catch (error) {
            return{
                statusCode:404,
                send:error.mensage
            };
            
        }
    }

    async getOne(req:Request):Promise<HttpResponse<IUser|string >> {
        
        try {
            
            const id = req.params.id;       
            
            const user = await User.findById(id);
            
            if(!user){
                throw new Error('Animal User not found');
            }

            return{
                statusCode:200,
                send: user as IUser
            };

        } catch (error) {
            return{
                statusCode:404,
                send:error.message
            };
            
        }
    }
}