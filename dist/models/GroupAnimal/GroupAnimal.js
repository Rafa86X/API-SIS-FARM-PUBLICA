"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = new mongoose_1.default.Schema({
    species: { type: String, required: true },
    active: { type: Boolean, required: true },
    name: { type: String, required: true, unique: true },
    gender: { type: String, required: true },
    date_birth: { type: String, required: true },
    date_start: { type: String, required: true },
    date_and: { type: String, required: true },
    reason: { ref: { type: String }, desc: { type: String } },
    puppies: { type: String },
    breed: { type: String },
    ancestry: { type: String },
}, {
    versionKey: false,
});
const GroupAnimal = mongoose_1.default.model('groupanimal', Schema);
exports.default = GroupAnimal;
