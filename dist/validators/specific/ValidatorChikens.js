"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidatorChikens = void 0;
const validatorGeneric_1 = require("../generics/validatorGeneric");
class ValidatorChikens {
    static valid(data) {
        validatorGeneric_1.ValidatorGeneric.onlyNumbers('active_chikens', 3, data, 'm');
        validatorGeneric_1.ValidatorGeneric.onlyNumbers('active_roosters', 3, data, 'm');
    }
}
exports.ValidatorChikens = ValidatorChikens;
