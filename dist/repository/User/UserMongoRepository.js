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
exports.UserMongoRepository = void 0;
const User_1 = __importDefault(require("../../models/User/User"));
class UserMongoRepository {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield User_1.default.find({});
                if (users.length === 0) {
                    throw new Error('There are no registered animals.');
                }
                return {
                    statusCode: 200,
                    send: users
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
                let newUser = new User_1.default(data);
                newUser = yield newUser.save();
                return {
                    statusCode: 200,
                    send: newUser
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
                const testID = yield User_1.default.findById(id);
                if (!testID) {
                    throw new Error(`There is no User registered with this ID ${id}`);
                }
                yield User_1.default.findByIdAndUpdate(id, { $set: req.body });
                const item = yield User_1.default.findById(id);
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
                const testID = yield User_1.default.findById(id);
                if (!testID) {
                    throw new Error(`There is no User registered with this ID ${id}`);
                }
                yield User_1.default.findByIdAndDelete(id);
                const users = yield User_1.default.findById(id);
                let mensage = '';
                if (!users) {
                    mensage = 'Animal deleted successfully';
                }
                else {
                    mensage = 'Unable to delete Animal';
                }
                return {
                    statusCode: 200,
                    send: mensage
                };
            }
            catch (error) {
                return {
                    statusCode: 404,
                    send: error.mensage
                };
            }
        });
    }
    getOne(req) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const user = yield User_1.default.findById(id);
                if (!user) {
                    throw new Error('Animal User not found');
                }
                return {
                    statusCode: 200,
                    send: user
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
exports.UserMongoRepository = UserMongoRepository;
