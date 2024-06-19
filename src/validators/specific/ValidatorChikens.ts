import { IChickens } from '../../models/Chickens/IChickens';
import { ValidatorGeneric } from '../generics/validatorGeneric';

export abstract class ValidatorChikens{

    static valid(data:IChickens):void{

 
        ValidatorGeneric.onlyNumbers('active_chikens',3,data, 'm');
        ValidatorGeneric.onlyNumbers('active_roosters',3,data, 'm');

    }

}