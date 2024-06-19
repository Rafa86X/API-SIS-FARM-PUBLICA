"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Segurity_1 = require("../security/Segurity");
const app = (0, express_1.default)();
app.use(Segurity_1.Segurity.autenticater);
exports.default = app;
