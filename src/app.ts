import express from 'express';
import dotenv from 'dotenv';
import { Signale } from 'signale';

import { authRouter } from './auth/infraestructure/routes/authRoutes';
import { studentRouter } from './student/infraestructure/routes/studentRoutes';

dotenv.config();

const app = express();
const signale = new Signale();

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Middleware para manejar datos de formularios

app.use('/api/v1/user', studentRouter);

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
    signale.success(`Server online in port ${PORT}`);
});