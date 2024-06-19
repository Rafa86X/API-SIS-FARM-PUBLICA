"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidatorGeneric = void 0;
const CommonModels_1 = require("../../models/CommonModels");
class ValidatorGeneric {
    static enumValidReasons(fieldName, data) {
        const enumX = CommonModels_1.CommonsModdels.refersToReasons.map(c => c);
        enumX[0] = '\'\'';
        if (!CommonModels_1.CommonsModdels.refersToReasons.includes(data)) {
            throw new Error(`The ${fieldName} field  only accepts the data: ${enumX}`);
        }
    }
    static enumValidGender(fieldName, data) {
        if (!CommonModels_1.CommonsModdels.gender.includes(data)) {
            throw new Error(`The ${fieldName} field  only accepts the data: ${CommonModels_1.CommonsModdels.gender}`);
        }
    }
    static enumValidPharmacoType(fieldName, data) {
        if (!CommonModels_1.CommonsModdels.pharmacoType.includes(data)) {
            throw new Error(`The ${fieldName} field  only accepts the data: ${CommonModels_1.CommonsModdels.pharmacoType}`);
        }
    }
    static enumValidSpecies(fieldName, data) {
        if (!CommonModels_1.CommonsModdels.species.includes(data)) {
            throw new Error(`The ${fieldName} field  only accepts the data: ${CommonModels_1.CommonsModdels.species}`);
        }
    }
    static onlyNumbers(f_Name, eLength, data, role) {
        const { fieldValue, fieldName } = this.captureFieldValue(data, f_Name);
        const regex = /[^0-9]/gi;
        if (regex.test(fieldValue)) {
            throw new Error(`Only numbers in this field: ${fieldName}`);
        }
        if (role === 'e') {
            if ((fieldValue.length > eLength) || (fieldValue.length < eLength)) {
                throw new Error(`This field requires exactly ${eLength} digits: ${fieldName}`);
            }
        }
        if (role == 'm') {
            if ((fieldValue.length > eLength)) {
                throw new Error(`This field requires maximum of ${eLength} digits: ${fieldName}`);
            }
        }
    }
    static onlyID(f_Name, data) {
        const { fieldValue, fieldName } = this.captureFieldValue(data, f_Name);
        const regex = /[^a-z0-9]/g;
        if (regex.test(fieldValue)) {
            throw new Error(`Only chars and numbers in this field: ${fieldName}`);
        }
        if (fieldValue.length != 24) {
            throw new Error('This field requires exactly 24 digits.');
        }
    }
    static onlyChars(f_Name, eLength, data) {
        const { fieldValue, fieldName } = this.captureFieldValue(data, f_Name);
        const regex = /[^a-z]/gi;
        if (regex.test(fieldValue)) {
            throw new Error(`Only chars in this field: ${fieldName}`);
        }
        if ((fieldValue.length > eLength)) {
            throw new Error(`This field requires maximum of ${eLength} chars: ${fieldName}`);
        }
    }
    static onlyText(f_Name, eLength, data) {
        const { fieldValue, fieldName } = this.captureFieldValue(data, f_Name);
        if ((fieldValue.length > eLength)) {
            throw new Error(`This field requires maximum of ${eLength} chars: ${fieldName}`);
        }
    }
    static captureFieldValue(data, fieldName) {
        const dataArrrayValues = [...Object.values(data)];
        const dataArrrayKeys = [...Object.keys(data)];
        let fieldValue = '';
        for (let i = 0; i < dataArrrayValues.length; i++) {
            if (fieldName === dataArrrayKeys[i]) {
                fieldValue = dataArrrayValues[i];
            }
        }
        return { fieldValue, fieldName };
    }
}
exports.ValidatorGeneric = ValidatorGeneric;
