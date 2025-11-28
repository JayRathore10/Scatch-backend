import { Router } from "express";
import { test } from "../controllers/product.controller";

export const productRouter = Router();

productRouter.get("/test"  , test);
