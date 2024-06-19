"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const db = () => mongoose_1.default.connect(process.env.DATABASE_URL2)
    .then(() => console.log('conectou'));
exports.default = db;
