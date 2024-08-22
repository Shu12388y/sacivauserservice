import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import { DashBoardRouter } from "./Routes/DashBoard.Router";
import { healthRouter } from "./healthCheck/healthcheck";
import { sysRouter } from "./systemStatus/Sys.Router";
import { surveyRouter } from "./Routes/Survey.Router";


export const app = express(); 




// Configure middlewares
app.use(cookieParser());
app.use(cors({origin:['http://localhost:3000','https://sacivamvp.vercel.app']}));
app.use(helmet());
app.use(express.json({limit:"30mb"}));
app.use(express.urlencoded({extended:true,limit:'30mb'}));
app.use(compression());



// Router
app.use("/api/v1",DashBoardRouter);
app.use("/api/v1",surveyRouter);
app.use(healthRouter);
app.use(sysRouter);

