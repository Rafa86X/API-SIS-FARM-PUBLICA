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
exports.GroupAnimalController = void 0;
const GroupAnimalMongoRepository_1 = require("../repository/GroupAnimal/GroupAnimalMongoRepository");
const ValidatorGroupAnimal_1 = require("../validators/specific/ValidatorGroupAnimal");
class GroupAnimalController {
    getAll(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const repository = new GroupAnimalMongoRepository_1.GroupAnimalkMongoRepository();
                const many = yield repository.getAll();
                req.many = many;
                next();
            }
            catch (error) {
                return res.status(400).json({ message: error.message });
            }
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const repository = new GroupAnimalMongoRepository_1.GroupAnimalkMongoRepository();
                const one = yield repository.getOne(req);
                res.status(one.statusCode).json(one.send);
            }
            catch (error) {
                return res.status(400).json({ message: error });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = req.body;
                const repository = new GroupAnimalMongoRepository_1.GroupAnimalkMongoRepository();
                ValidatorGroupAnimal_1.ValidatorGroupAnimal.valid(data);
                const registered = yield repository.create(data);
                res.status(registered.statusCode).json(registered.send);
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
                const repository = new GroupAnimalMongoRepository_1.GroupAnimalkMongoRepository();
                ValidatorGroupAnimal_1.ValidatorGroupAnimal.valid(data);
                const updated = yield repository.update(req);
                res.status(updated.statusCode).json(updated.send);
            }
            catch (error) {
                return res.status(400).json({ message: error.message });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const repository = new GroupAnimalMongoRepository_1.GroupAnimalkMongoRepository();
                const resp = yield repository.delete(req);
                res.status(resp.statusCode).json(resp.send);
            }
            catch (error) {
                return res.status(400).json({ message: error });
            }
        });
    }
}
exports.GroupAnimalController = GroupAnimalController;
