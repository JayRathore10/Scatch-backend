import {Request , Response} from "express";
import { userModel } from "../models/user.model";
import { generateToken } from "../utils/generateToken";
import bcrypt from 'bcrypt';

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

    const salt = await bcrypt.genSalt(10);
    const hashedPassword  = await bcrypt.hash(password , salt);

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

export const loginUser = async (req : Request , res : Response)=>{
  try{
    const {email , password} = req.body; 
    
    if(!email || !password){
      return res.status(400).json({
        message : "Something went wrong"
      })
    }

    const user = await userModel.findOne({email : email});

    if(!user){
      return res.status(500).json({
        message : "User Not found"
      })
    }
    
    const result = await bcrypt.compare(password , user.password);
    if(!result){
      return res.status(500).json({
        message : "User Not found"
      })
    }

    const token = generateToken(user);
    res.cookie("token",token);
    return res.status(200).json({
      user
    })

  }catch(err){
    return res.status(500).json({
      err 
    })
  }
}