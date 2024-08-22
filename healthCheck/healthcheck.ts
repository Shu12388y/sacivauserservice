import { Router } from "express";
import { type Response,type Request  } from "express";

export const healthRouter = Router()


healthRouter.get("/health",(_:Request,res:Response)=>{
    try {
        return res.json({message:"Healthy"}).status(200)
    } catch (error) {
        return res.json({message:error}).status(500)
    }
})
