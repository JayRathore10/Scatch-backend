import mongoose from "mongoose";
import path = require("path");
import debug from "debug";

process.env.NODE_CONFIG_DIR = path.join(__dirname);
import config from "config";

const dbger = debug("development:mongoose");


export const connectDB = async ()=>{
  try{
    const DB_PORT : string = config.get("MONGODB_URI") ;
    await mongoose.connect(DB_PORT);  
    dbger('DB Connected');
  }catch(err){
    dbger(err);
  }

}