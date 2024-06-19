"use strict";
/* eslint-disable @typescript-eslint/no-unused-vars */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pager = void 0;
class Pager {
    static runPage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { limite = 10, pagina = 1 } = req.query;
                const data = req.many.send;
                const numItens = data.length;
                if (data[0] == null) {
                    throw new Error('No results for this search');
                }
                const newList = assembleList(data, limite, pagina);
                const numPages = calculatesPages(numItens, limite);
                const pager = {
                    pager: {
                        totalNumberOfItems: numItens,
                        totalNumberOfItemsPerPage: limite,
                        currentePage: pagina,
                        totalNumberOfPages: parseInt(numPages.toFixed())
                    }
                };
                const fullResult = newList.concat(pager);
                res.status(200).json(fullResult);
            }
            catch (error) {
                res.status(500).json({ message: `${error} Middleware error` });
            }
            function calculatesPages(a, b) {
                const c = a / b;
                if ((c > 0.01) && (c < 0.5)) {
                    return 1;
                }
                else {
                    return a / b;
                }
            }
            function assembleList(array = [], limitOfObjects, pager) {
                const return__ = [];
                let i = 0;
                i = (pager - 1) * limitOfObjects;
                do {
                    if (i < limitOfObjects * pager) {
                        return__.push(array[i]);
                    }
                    i = i + 1;
                } while (i < array.length);
                return return__;
            }
        });
    }
}
exports.Pager = Pager;
