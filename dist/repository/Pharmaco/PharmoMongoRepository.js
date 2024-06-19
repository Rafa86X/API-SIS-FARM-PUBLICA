"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PharmacoMongoRepository = void 0;
const Pharmaco_1 = __importDefault(require("../../models/Pharmaco/Pharmaco"));
class PharmacoMongoRepository {
    getAllForAnimal(req) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const pharmaco = yield Pharmaco_1.default.find({ animal_id: id });
                if (pharmaco.length == 0) {
                    throw new Error('Pharmaco not found');
                }
                return {
                    statusCode: 200,
                    send: pharmaco
                };
            }
            catch (error) {
                return {
                    statusCode: 404,
                    send: error.message
                };
            }
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error('This method should not be used for this route.');
        });
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pharmaco = new Pharmaco_1.default(data);
                const newPharmaco = yield pharmaco.save();
                return {
                    statusCode: 200,
                    send: newPharmaco
                };
            }
            catch (error) {
                return {
                    statusCode: 400,
                    send: error.message
                };
            }
        });
    }
    getOne(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            throw new Error('This method should not be used for this route.' + id);
        });
    }
    update(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            throw new Error('This method should not be used for this route.' + id);
        });
    }
    delete(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            throw new Error('This method should not be used for this route.' + id);
        });
    }
}
exports.PharmacoMongoRepository = PharmacoMongoRepository;
