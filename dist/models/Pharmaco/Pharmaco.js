"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = new mongoose_1.default.Schema({
    animal_id: { type: String },
    pharmacoType: { type: String },
    name: { type: String },
    qtd: { type: String },
    reason: { type: String },
    date: { type: String }
}, {
    versionKey: false,
});
const Pharmaco = mongoose_1.default.model('pharmaco', Schema);
exports.default = Pharmaco;
