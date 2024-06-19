"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = new mongoose_1.default.Schema({
    name: { type: String, required: true, unique: true },
    password: { type: String, required: true },
}, {
    versionKey: false,
});
const User = mongoose_1.default.model('users', Schema);
exports.default = User;
