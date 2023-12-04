import express, { Router } from "express";
import {
    createEventController,
    getByIdEventController,
    getAllEventsController,
    // updateEventController,
    getByCommunityIdController
} from "../dependencies";

export const eventRouter = Router();

eventRouter.post('/', createEventController.execute.bind(createEventController));
eventRouter.get('/:id', getByIdEventController.execute.bind(getByIdEventController));
eventRouter.get('/community/:id_community', getByCommunityIdController.execute.bind(getByCommunityIdController));
eventRouter.get('/', getAllEventsController.execute.bind(getAllEventsController));
// EventRouter.put('/:id', updateEventController.execute.bind(updateEventController));