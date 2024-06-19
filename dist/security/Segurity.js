"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Segurity = void 0;
const bcrypt_1 = require("bcrypt");
const jsonwebtoken_1 = require("jsonwebtoken");
const User_1 = __importDefault(require("../models/User/User"));
class Segurity {
    static testPassWord(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield User_1.default.findOne({ name: data.name });
            const respNotOk = {
                login: 'Denied: Incorrect username or password',
                token: ''
            };
            if (user) {
                const senhasIguais = yield (0, bcrypt_1.compare)(data.password, user.password);
                if (senhasIguais) {
                    const token = this.tokenGenerator(user);
                    const respOk = {
                        login: 'approved',
                        name: data.name,
                        token
                    };
                    return respOk;
                }
                return respNotOk;
            }
            return respNotOk;
        });
    }
    static tokenGenerator(user) {
        const acssesToken = (0, jsonwebtoken_1.sign)({ name: user.name }, process.env.TOKEN_SECRETE, { expiresIn: 28800 });
        return acssesToken;
    }
    static autenticater(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const token = req.headers.authorization;
                if (!token) {
                    throw new Error();
                }
                const [, acssesToken] = token.split(' ');
                (0, jsonwebtoken_1.verify)(acssesToken, process.env.TOKEN_SECRETE);
                const { name } = (0, jsonwebtoken_1.decode)(acssesToken);
                req.usuarioEmail = name;
                return next();
            }
            catch (error) {
                res.status(401).json({ message: `${error} Token invalido, ou ausência de token.` });
            }
        });
    }
}
exports.Segurity = Segurity;
