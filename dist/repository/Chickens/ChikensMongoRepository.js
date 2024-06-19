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
exports.ChickensMongoRepository = void 0;
const Chickens_1 = __importDefault(require("../../models/Chickens/Chickens"));
class ChickensMongoRepository {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const chickens = yield Chickens_1.default.find();
                if (chickens.length === 0) {
                    throw new Error('There are no registered animals.');
                }
                return {
                    statusCode: 200,
                    send: chickens
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
    update(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const chickens = yield Chickens_1.default.find();
                if (chickens.length === 0) {
                    const newDBChikens = new Chickens_1.default({ active_chikens: '0', active_roosters: '0' });
                    yield newDBChikens.save();
                }
                const id = chickens[0].id;
                yield Chickens_1.default.findByIdAndUpdate(id, { $set: data });
                const item = yield Chickens_1.default.findById(id);
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
}
exports.ChickensMongoRepository = ChickensMongoRepository;
