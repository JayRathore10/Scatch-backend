import { Router } from "express";
import { test } from "../controllers/owner.controller";

export const ownerRouter = Router();

ownerRouter.get("/test" , test); 