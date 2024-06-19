import { IGroupAnimal } from '../../models/GroupAnimal/IGroupAnimal';
import { ValidatorGeneric } from '../generics/validatorGeneric';

export abstract class ValidatorGroupAnimal{

    static valid(data:IGroupAnimal):void{
        ValidatorGeneric.enumValidSpecies('species',data.species);
        ValidatorGeneric.onlyChars('name',20,data);
        ValidatorGeneric.onlyNumbers('date_birth',8,data, 'e');
        ValidatorGeneric.onlyNumbers('date_start',8,data, 'e');
        ValidatorGeneric.onlyNumbers('date_and',8,data, 'e');
        ValidatorGeneric.onlyText('desc',250,data.reason);
        ValidatorGeneric.enumValidReasons('ref',data.reason.ref);
        ValidatorGeneric.enumValidGender('gender',data.gender);
        ValidatorGeneric.onlyNumbers('puppies',2,data, 'm');
        ValidatorGeneric.onlyChars('name',50,data);
        ValidatorGeneric.onlyText('breed',50,data);
        ValidatorGeneric.onlyText('ancestry',50,data);
    }

}