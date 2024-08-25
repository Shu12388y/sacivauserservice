import { Router } from "express";
import { RoomController } from "../Controller/Room.Controller";

export const RoomRouter = Router()

RoomRouter.post("/createrooms",RoomController.createRoom)