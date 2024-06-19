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
exports.GroupAnimalkMongoRepository = void 0;
const GroupAnimal_1 = __importDefault(require("../../models/GroupAnimal/GroupAnimal"));
class GroupAnimalkMongoRepository {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const animals = yield GroupAnimal_1.default.find();
                if (animals.length === 0) {
                    throw new Error('There are no registered animals.');
                }
                return {
                    statusCode: 200,
                    send: animals
                };
            }
            catch (error) {
                return {
                    statusCode: 400,
                    send: error.mensage
                };
            }
        });
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const animal = new GroupAnimal_1.default(data);
                const exists = yield GroupAnimal_1.default.find({ name: data.name });
                if (exists.length > 0) {
                    throw new Error(`O nome de animal >> ${data.name} << já esta em uso.`);
                }
                const newAnimals = yield animal.save();
                return {
                    statusCode: 200,
                    send: newAnimals
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
    update(req) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const testID = yield GroupAnimal_1.default.findById(id);
                if (!testID) {
                    throw new Error(`There is noGroupAnimal registered with this ID ${id}`);
                }
                yield GroupAnimal_1.default.findByIdAndUpdate(id, { $set: req.body });
                const item = yield GroupAnimal_1.default.findById(id);
                return {
                    statusCode: 200,
                    send: item
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
    delete(req) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const testID = yield GroupAnimal_1.default.findById(id);
                if (!testID) {
                    throw new Error(`There is no Animal registered with this ID ${id}`);
                }
                yield GroupAnimal_1.default.findByIdAndDelete(id);
                const testIDdeleted = yield GroupAnimal_1.default.findById(id);
                let message = '';
                if (!testIDdeleted) {
                    message = 'Animal deleted successfully';
                }
                else {
                    message = 'Unable to delete Animal';
                }
                return {
                    statusCode: 200,
                    send: message,
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
    getOne(req) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const groupanimal = yield GroupAnimal_1.default.findById(id);
                if (!groupanimal) {
                    throw new Error('AnimalDog not found');
                }
                return {
                    statusCode: 200,
                    send: groupanimal
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
}
exports.GroupAnimalkMongoRepository = GroupAnimalkMongoRepository;
