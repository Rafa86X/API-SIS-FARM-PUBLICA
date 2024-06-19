"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ChikensController_1 = require("../controllers/ChikensController");
const app = (0, express_1.default)();
const controller = new ChikensController_1.ChickensController();
app.get('/chickens', controller.getAll)
    .patch('/chickens', controller.update);
exports.default = app;
