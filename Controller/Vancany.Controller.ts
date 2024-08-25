import { type Response, type Request } from "express";
import { prisma } from "../DataBase/db";
import jwt, { type JwtPayload } from "jsonwebtoken";

export class VancanyController {
    static async createVancy(req: Request, res: Response) {
        try {
            const userCookie = req.cookies;

            if (!userCookie) {
                return res.json({ "message": "Login Please" }).status(500)
            }
            const userToken = userCookie.token
            const userData: JwtPayload = jwt.verify(userToken, process.env.SECERT!) as JwtPayload
            const userHomeInfo = await prisma.rooms.findFirst({
                where: {
                    email: userData.data
                }
            })
            console.log(userHomeInfo?.id)

            if (!userHomeInfo) {
                return res.json({ "message": "Room Not Found" }).status(404)
            }
            const roomId = await userHomeInfo.id;
            const { duration, vacancyType, sharingType, rent, preferences, moveIn, moveOut, cluster } = await req.body;

            const vacancy = await prisma.vacancy.create({
                data: {
                    duration, vacancyType, sharingType, rent, preferences, moveIn, moveOut, cluster, roomId
                }
            });
            if (!vacancy) {
                return res.json({ "message": 'server error' }).status(404)
            }

            return res.json({ "message": "vancancy creates" }).status(200)



        } catch (error) {
            return res.json({ "message": error }).status(500)
        }
    }
}