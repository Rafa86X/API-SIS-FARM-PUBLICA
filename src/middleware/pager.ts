/* eslint-disable @typescript-eslint/no-unused-vars */

import { HttpResponse } from '../repository/protocols';



export abstract class Pager {

    static async runPage(req, res): Promise<void> {

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

        } catch (error) {
            res.status(500).json({ message: `${error} Middleware error` });

        }


        function calculatesPages(a: number, b: number): number {
            const c = a / b;
            if ((c > 0.01) && (c < 0.5)) { return 1; }
            else { return a / b; }

        }

        function assembleList(array = [], limitOfObjects: number, pager: number): unknown[] {

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
    }






}