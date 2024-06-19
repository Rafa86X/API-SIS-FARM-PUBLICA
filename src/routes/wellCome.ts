import  express  from 'express';

const app = express();

const route = app.get('/',(req,res) => {
    return res.send({Mensage:'෴❤️ Well Come to << SYS FARM ANIMAL 2.0 >> ❤️෴'});
});


export default route;