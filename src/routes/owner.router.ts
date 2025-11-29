import { Router } from "express";
import { createOwner, test } from "../controllers/owner.controller";

export const ownerRouter = Router();

if(process.env.NODE_ENV === "development"){
  ownerRouter.get("/test" , test); 
  ownerRouter.post("/create" , createOwner);
}
