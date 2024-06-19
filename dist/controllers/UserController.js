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
exports.UserController = void 0;
const UserMongoRepository_1 = require("../repository/User/UserMongoRepository");
const Segurity_1 = require("../security/Segurity");
class UserController {
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const repository = new UserMongoRepository_1.UserMongoRepository();
                const many = yield repository.getAll();
                res.status(many.statusCode).json(many.send);
            }
            catch (error) {
                return res.status(400).json({ message: error.message });
            }
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const repository = new UserMongoRepository_1.UserMongoRepository();
                const one = yield repository.getOne(req);
                res.status(one.statusCode).json(one.statusCode);
            }
            catch (error) {
                return res.status(400).json({ message: error });
            }
        });
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = req.body;
                const one = yield Segurity_1.Segurity.testPassWord(data);
                res.status(200).json(one);
            }
            catch (error) {
                return res.status(400).json({ message: error.message });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //   const data = req.body;
                // const repository = new UserMongoRepository();
                //  const registred = await repository.create(data);
                //res.status(registred.statusCode).json(registred.send);
            }
            catch (error) {
                return res.status(400).json({ message: error.message });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // const data = req.body;
                // const repository = new UserMongoRepository();
                // const updated = await repository.update(req);
                // res.status(updated.statusCode).json(updated.send);
            }
            catch (error) {
                return res.status(400).json({ message: error.message });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // const repository = new UserMongoRepository();
                // const deleted = await repository.delete(req);
                // res.status(deleted.statusCode).json(deleted.send);
            }
            catch (error) {
                return res.status(400).json({ message: error });
            }
        });
    }
}
exports.UserController = UserController;
