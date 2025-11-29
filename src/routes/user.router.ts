import { Router } from "express";
import { registerUser, test } from "../controllers/user.controller";

export const userRouter = Router();

userRouter.get("/test" , test);
userRouter.post("/register" , registerUser );
