/* eslint-disable @typescript-eslint/no-var-requires */
import express from 'express';
import { config } from 'dotenv';
import routes from './routes/router';
import db from './db';
const cors = require('cors');

config();

const app = express();



db();

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on ports ${port}`));
app.use(cors());

app.use(express.json()).use(routes);

