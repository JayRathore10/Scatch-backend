import mongoose from "mongoose";

export const connectDB = ()=>{
  try{
    const DB_PORT = process.env.DB_PORT || `mongodb://localhost:27017/Scatch` ;
  
    mongoose.connect(DB_PORT);  
    console.log('DB Connected');
  }catch(err){
    console.log(err);
  }

}