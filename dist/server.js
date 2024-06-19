"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-var-requires */
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
const router_1 = __importDefault(require("./routes/router"));
const db_1 = __importDefault(require("./db"));
const cors = require('cors');
(0, dotenv_1.config)();
const app = (0, express_1.default)();
(0, db_1.default)();
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on ports ${port}`));
app.use(cors());
app.use(express_1.default.json()).use(router_1.default);
