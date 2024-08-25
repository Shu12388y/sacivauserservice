import { Router } from "express";
import { VancanyController } from "../Controller/Vancany.Controller";

export const VancanyRouter = Router()


VancanyRouter.post("/createvancany",VancanyController.createVancy);