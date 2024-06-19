"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PharmacoController_1 = require("../controllers/PharmacoController");
const pager_1 = require("../middleware/pager");
const app = (0, express_1.default)();
const controller = new PharmacoController_1.PharmacoController();
app.post('/pharmaco', controller.create)
    .get('/pharmaco/:id', controller.getAll, pager_1.Pager.runPage);
exports.default = app;
