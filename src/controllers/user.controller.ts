import {Request , Response} from "express";
import jwt from "jsonwebtoken";
import { userModel } from "../models/user.model";
import bycrpt from 'bcrypt';
import { generateToken } from "../utils/generateToken";

export const test = (req : Request , res : Response)=>{
  try{
    console.log(process.env.development);
    return res.status(200).json({
      message : " Test "
    })
  }catch(err){
    return res.status(500).json({
      err 
    })
  }
}

export const registerUser = async (req : Request, res : Response)=>{
  try{
    const {email , password , fullname} = req.body;

    if(!email || !password || !fullname){
      return res.status(404).json({
        message : "Something went wrong"
      })
    }

    if(await userModel.findOne({email})){
      return res.status(401).json({
        message : "User Already Found"
      })
    }

    const salt = await bycrpt.genSalt(10);
    const hashedPassword  = await bycrpt.hash(password , salt);

    const user = await userModel.create({
      email , 
      password : hashedPassword , 
      fullname 
    });

    
    if(!user){
      return res.status(500).json({
        message : " Somthing Went Wrong "
      })
    }
    const token = generateToken(user);
    res.cookie("token" , token);
    return res.status(200).json({
      user 
    });

  }catch(err){
    return res.status(500).json({
      err 
    })
  }
}