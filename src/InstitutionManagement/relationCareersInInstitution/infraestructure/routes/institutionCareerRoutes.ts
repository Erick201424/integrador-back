import expreess, { Router } from "express";
import {
    createRelationshipInstitutionCareerController,
    getCareersByInstitutionController,
    updateRelationshipInstitutionCareerController
} from "../dependencies";

export const relationshipInstitutionCareerRouter = Router();

relationshipInstitutionCareerRouter.post('/careers', createRelationshipInstitutionCareerController.execute.bind(createRelationshipInstitutionCareerController));
relationshipInstitutionCareerRouter.put('/:id/careers', updateRelationshipInstitutionCareerController.execute.bind(updateRelationshipInstitutionCareerController));
relationshipInstitutionCareerRouter.get('/:institution_id/careers', getCareersByInstitutionController.execute.bind(getCareersByInstitutionController));