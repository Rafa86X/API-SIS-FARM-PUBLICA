import { IUser } from '../models/User/IUser';
import { compare } from 'bcrypt';
import { sign, verify, decode } from 'jsonwebtoken';


import User from '../models/User/User';


export abstract class Segurity {


    static async testPassWord(data: IUser): Promise<unknown> {

        const user = await User.findOne({ name: data.name });
        const respNotOk = {
            login: 'Denied: Incorrect username or password',
            token: ''
        };

        if (user) {

            const senhasIguais = await compare(data.password, user.password);

            if (senhasIguais ) {


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

    }

    static tokenGenerator(user: IUser): string {


        const acssesToken = sign({ name: user.name }, process.env.TOKEN_SECRETE, { expiresIn: 28800 });
        return acssesToken;
    }

    static async autenticater(req, res, next) {



        try {
            const token = req.headers.authorization;

            if (!token) {
                throw new Error();
            }


            const [, acssesToken] = token.split(' ');

            verify(acssesToken, process.env.TOKEN_SECRETE);

            const { name } = decode(acssesToken);

            req.usuarioEmail = name;

            return next();
        }
        catch (error) {
            res.status(401).json({ message: `${error} Token invalido, ou ausência de token.` });
        }
    }

}

