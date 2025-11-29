import cookieParser from "cookie-parser";
import express from "express";
import { userRouter } from "./routes/user.router";
import { productRouter } from "./routes/product.router";
import { ownerRouter } from "./routes/owner.router";
import dotenv from "dotenv";

// loads the environment variable 
dotenv.config(); 

export const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cookieParser());

app.use("/user", userRouter);
app.use("/product" , productRouter);
app.use("/owner" , ownerRouter);
