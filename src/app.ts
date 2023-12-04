import express, { Application } from 'express';
import { Signale } from 'signale';

import cors from 'cors';
import dotenv from 'dotenv';
import proxy from 'express-http-proxy';
import morgan from 'morgan';

dotenv.config();

const app: Application = express();
const signale = new Signale();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

const port = process.env.PORT;

app.use('/api/v1/institution', proxy('http://localhost:3001'));
app.use('/api/v1/career', proxy('http://localhost:3001'));

app.use('/api/v1/user', proxy('http://localhost:3002'))

// Iniciar el servidor
app.listen(port, () => {
    signale.success(`API Gateway en el puerto ${port}`);
});