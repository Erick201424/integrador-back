import express, { Router } from "express";
import {
    createSubjectController,
    getByIdSubjectController,
    getAllSubjectsController,
    updateSubjectController,
    getByStudentIdController
} from "../dependencies";

export const subjectRouter = Router();

subjectRouter.post('/', createSubjectController.execute.bind(createSubjectController));
subjectRouter.get('/:id', getByIdSubjectController.execute.bind(getByIdSubjectController));
subjectRouter.get('/user/:iduser', getByStudentIdController.execute.bind(getByStudentIdController));
subjectRouter.get('/', getAllSubjectsController.execute.bind(getAllSubjectsController));
subjectRouter.put('/:id', updateSubjectController.execute.bind(updateSubjectController));