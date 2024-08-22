import { Router } from "express";
import { getSystemStatus } from "./sys";
import { type Request,type Response } from "express";


export const sysRouter = Router()



sysRouter.get("/status",(_:Request,res:Response)=>{
        try {
            const data  = getSystemStatus();
            return res.json({message:data}).status(200)
        } catch (error) {
            return res.json({message:error}).status(500)
        }
})