import { Router } from "express";
import { UserProfile } from "../Controller/UserProfile.Controller";

export const DashBoardRouter = Router();




// create new user profile
DashBoardRouter.post("/createuserprofile/:id",UserProfile.createUserProfile);

// update user profile
DashBoardRouter.put("/updateuserprofile",UserProfile.updateUserProfile)

// Update to user profile findmate is true
DashBoardRouter.put("/activatemate",UserProfile.updateFindmates);

// delete user profile
DashBoardRouter.delete("/deleteuserprofile",UserProfile.deleteUserProfile);

// find room mates
DashBoardRouter.get("/findmates",UserProfile.findUser);

