import { IPharmaco } from '../../models/Pharmaco/IPharmaco';
import { ValidatorGeneric } from '../generics/validatorGeneric';

export abstract class ValidatorPharmaco{

    static valid(data:IPharmaco):void{

        ValidatorGeneric.onlyID('animal_id',data);
        ValidatorGeneric.enumValidPharmacoType('pharmacoType',data.pharmacoType);
        ValidatorGeneric.onlyChars('name',20,data);
        ValidatorGeneric.onlyText('qtd',50,data);
        ValidatorGeneric.onlyText('reason',200,data);
        ValidatorGeneric.onlyNumbers('date',8,data, 'e');
    }

}