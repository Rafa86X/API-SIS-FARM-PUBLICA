"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pager_1 = require("../middleware/pager");
const GroupAnimal_1 = require("../controllers/GroupAnimal");
const app = (0, express_1.default)();
const controller = new GroupAnimal_1.GroupAnimalController();
app.get('/groupanimal', controller.getAll, pager_1.Pager.runPage)
    .post('/groupanimal', controller.create)
    .patch('/groupanimal/:id', controller.update)
    .delete('/groupanimal/:id', controller.delete)
    .get('/groupanimal/:id', controller.getOne);
exports.default = app;
