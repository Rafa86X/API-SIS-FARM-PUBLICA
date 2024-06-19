"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = new mongoose_1.default.Schema({
    active_chikens: { type: String, required: true },
    active_roosters: { type: String, required: true },
}, {
    versionKey: false,
});
const Chickens = mongoose_1.default.model('chickens', Schema);
exports.default = Chickens;
