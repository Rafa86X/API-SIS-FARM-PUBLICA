import { Request, Response } from 'express';
import { ChickensMongoRepository } from '../repository/Chickens/ChikensMongoRepository';
import { ValidatorChikens } from '../validators/specific/ValidatorChikens';

export class ChickensController {


    async getAll(req: Request, res: Response): Promise<Response> {

        try {
            const repository = new ChickensMongoRepository();
            const itens = await repository.getAll();
            res.status(itens.statusCode).json(itens.send);
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }

    async update(req: Request, res: Response): Promise<Response> {


        try {
            const data = req.body;
            const repository = new ChickensMongoRepository();

            ValidatorChikens.valid(data);


            const upadted = await repository.update(data);

            res.status(upadted.statusCode).json(upadted.send);
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }

}

