"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const wellCome_1 = __importDefault(require("./wellCome"));
const chickens_1 = __importDefault(require("./chickens"));
const loginRoute_1 = __importDefault(require("./loginRoute"));
const authRote_1 = __importDefault(require("./authRote"));
const pharmacoRoute_1 = __importDefault(require("./pharmacoRoute"));
const groupAnimalRouter_1 = __importDefault(require("./groupAnimalRouter"));
const app = (0, express_1.default)();
app.use(wellCome_1.default, loginRoute_1.default, authRote_1.default, chickens_1.default, pharmacoRoute_1.default, groupAnimalRouter_1.default);
exports.default = app;
