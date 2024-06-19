import { HttpResponse } from '../protocols';
import { IChickens } from '../../models/Chickens/IChickens';
import Chickens from '../../models/Chickens/Chickens';


export class ChickensMongoRepository{

    async getAll():Promise<HttpResponse<IChickens[] | string>> {
        
        try {
            
            const chickens = await Chickens.find();             

            if(chickens.length === 0){
                throw new Error('There are no registered animals.');
            }           
            return{
                statusCode:200,
                send: chickens as IChickens[]
            };
        } catch (error) {
            return{
                statusCode:400,
                send:error.mensage
            };
            
        }
    }

   
    async update(data:IChickens):Promise<HttpResponse<IChickens|string >> {
        
        try {
            
            const chickens = await Chickens.find();

            if(chickens.length===0){
                const newDBChikens = new Chickens({active_chikens:'0', active_roosters:'0'});

                await newDBChikens.save();
            }

            const id = chickens[0].id;
            await Chickens.findByIdAndUpdate(id, {$set: data});
            const item = await Chickens.findById(id);


            
            return{
                statusCode:200,
                send: item as IChickens
            };

        } catch (error) {
            return{
                statusCode:404,
                send:error.message
            };
            
        }
    }

  
}