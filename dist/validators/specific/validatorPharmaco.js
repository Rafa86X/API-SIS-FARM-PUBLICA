"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidatorPharmaco = void 0;
const validatorGeneric_1 = require("../generics/validatorGeneric");
class ValidatorPharmaco {
    static valid(data) {
        validatorGeneric_1.ValidatorGeneric.onlyID('animal_id', data);
        validatorGeneric_1.ValidatorGeneric.enumValidPharmacoType('pharmacoType', data.pharmacoType);
        validatorGeneric_1.ValidatorGeneric.onlyChars('name', 20, data);
        validatorGeneric_1.ValidatorGeneric.onlyText('qtd', 50, data);
        validatorGeneric_1.ValidatorGeneric.onlyText('reason', 200, data);
        validatorGeneric_1.ValidatorGeneric.onlyNumbers('date', 8, data, 'e');
    }
}
exports.ValidatorPharmaco = ValidatorPharmaco;
