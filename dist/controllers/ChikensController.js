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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChickensController = void 0;
const ChikensMongoRepository_1 = require("../repository/Chickens/ChikensMongoRepository");
const ValidatorChikens_1 = require("../validators/specific/ValidatorChikens");
class ChickensController {
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const repository = new ChikensMongoRepository_1.ChickensMongoRepository();
                const itens = yield repository.getAll();
                res.status(itens.statusCode).json(itens.send);
            }
            catch (error) {
                return res.status(400).json({ message: error.message });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = req.body;
                const repository = new ChikensMongoRepository_1.ChickensMongoRepository();
                ValidatorChikens_1.ValidatorChikens.valid(data);
                const upadted = yield repository.update(data);
                res.status(upadted.statusCode).json(upadted.send);
            }
            catch (error) {
                return res.status(400).json({ message: error.message });
            }
        });
    }
}
exports.ChickensController = ChickensController;
