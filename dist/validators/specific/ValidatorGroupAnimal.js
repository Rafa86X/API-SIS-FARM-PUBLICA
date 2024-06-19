"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidatorGroupAnimal = void 0;
const validatorGeneric_1 = require("../generics/validatorGeneric");
class ValidatorGroupAnimal {
    static valid(data) {
        validatorGeneric_1.ValidatorGeneric.enumValidSpecies('species', data.species);
        validatorGeneric_1.ValidatorGeneric.onlyChars('name', 20, data);
        validatorGeneric_1.ValidatorGeneric.onlyNumbers('date_birth', 8, data, 'e');
        validatorGeneric_1.ValidatorGeneric.onlyNumbers('date_start', 8, data, 'e');
        validatorGeneric_1.ValidatorGeneric.onlyNumbers('date_and', 8, data, 'e');
        validatorGeneric_1.ValidatorGeneric.onlyText('desc', 250, data.reason);
        validatorGeneric_1.ValidatorGeneric.enumValidReasons('ref', data.reason.ref);
        validatorGeneric_1.ValidatorGeneric.enumValidGender('gender', data.gender);
        validatorGeneric_1.ValidatorGeneric.onlyNumbers('puppies', 2, data, 'm');
        validatorGeneric_1.ValidatorGeneric.onlyChars('name', 50, data);
        validatorGeneric_1.ValidatorGeneric.onlyText('breed', 50, data);
        validatorGeneric_1.ValidatorGeneric.onlyText('ancestry', 50, data);
    }
}
exports.ValidatorGroupAnimal = ValidatorGroupAnimal;
