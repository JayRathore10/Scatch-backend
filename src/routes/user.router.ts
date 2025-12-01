import { Router } from "express";
import { loginUser, registerUser, test } from "../controllers/user.controller";

export const userRouter = Router();

userRouter.get("/test" , test);
userRouter.post("/register" , registerUser );
userRouter.post("/login" , loginUser);