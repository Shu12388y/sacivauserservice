import {Router} from "express";
import { Survey } from "../Controller/Survy.Controller";

export const surveyRouter = Router();


surveyRouter.post("/survery",Survey.getUserData);
