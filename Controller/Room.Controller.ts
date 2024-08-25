import { type Response, type Request } from "express";
import jwt, { type JwtPayload } from "jsonwebtoken";
import { prisma } from "../DataBase/db";

export class RoomController {
    static async createRoom(req: Request, res: Response) {
        try {
            const userCookie = req.cookies;
            if (!userCookie) {
                return res.json({ "message": "Please Login" }).status(403)
            }

            const userData: JwtPayload = jwt.verify(userCookie.token, process.env.SECERT!) as JwtPayload;

            if (!userData) {
                return res.json({ "message": "server error" }).status(500)
            }
            const { type, unit, amenities, store, totalRent, geolocation, address, startDate, endDate, roomMates,cluster } = await req.body

            if(!type && !unit && !amenities && !store && !totalRent && !geolocation && !address && !startDate && !endDate && !roomMates && !cluster){
                    return res.json({"message":"Every Field is required"}).status(404)
            }
            const roomData = await prisma.rooms.create({
                data: {
                    email: userData.data,
                    type, unit, amenities, store, totalRent, geolocation, address, startDate, endDate, roomMates,cluster
                }
            })

            if (!roomData) {
                return res.json({ "message": "something went wrong" }).status(404)
            }

            return res.json({ "message": "Room created" }).status(200)
        } catch (error) {
            return res.json({ "message": error }).status(500)

        }
    }

    static async updateRoom(req: Request, res: Response) {
        try {
            const userCookie = req.cookies;
            if (!userCookie) {
                return res.json({ "message": "Please Login" }).status(403)
            }

            const userData: JwtPayload = jwt.verify(userCookie.token, process.env.SECERT!) as JwtPayload;

            if (!userData) {
                return res.json({ "message": "server error" }).status(500)
            }
            const { type, unit, amenities, store, totalRent, geolocation, address, startDate, endDate, roomMates } = await req.body
            
            const updateRoomData = await prisma.rooms.update({
                where:{
                    email:userData.data
                },
                data:{
                    type, unit, amenities, store, totalRent, geolocation, address, startDate, endDate, roomMates

                }
            })

            if (!updateRoomData) {
                return res.json({ "message": "something went wrong" }).status(404)
            }

            return res.json({ "message": "Room created" }).status(200)
        } catch (error) {
            return res.json({ "message": error }).status(500)

        }
    }


    static async deleteRoom(req:Request,res:Response){
        try {
            const userCookie = req.cookies;
            if (!userCookie) {
                return res.json({ "message": "Please Login" }).status(403)
            }

            const userData: JwtPayload = jwt.verify(userCookie.token, process.env.SECERT!) as JwtPayload;

            if (!userData) {
                return res.json({ "message": "server error" }).status(500)
            }

            await prisma.rooms.delete({
                where:userData.data
            })
                return res.json({"message":"Room delete"}).status(200)
        } catch (error) {
            return res.json({"messsage":error}).status(500)
        }
    }



}