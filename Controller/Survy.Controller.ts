import {type Request, type Response} from "express";
import { prisma } from "../DataBase/db";
export class Survey{
    static async getUserData(req:Request,res:Response){
        try {
            const {email,universityexp,majorexp,cityexp} = await req.body;
            if( !email && !universityexp && !majorexp && !cityexp){
                return res.json({message:"every field is required"}).status(404)
            }
            await prisma.survey.create({
                data:{
                    email:email,
                    UniversityExp:universityexp,
                    MajorExp:majorexp,
                    CityExp:cityexp
                }
            })
            
            return res.json({message:"survey added"}).status(200)

        } catch (error) {
            return res.json({message:error}).status(500)
        }
    }

}