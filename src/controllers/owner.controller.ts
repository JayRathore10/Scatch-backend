import {Request , Response} from "express";
import { ownerModel } from "../models/owner.model";

export const test = (req : Request , res : Response)=>{
  try{
    return res.status(200).json({
      message : " Test "
    })
  }catch(err){
    return res.status(500).json({
      err 
    })
  }
}

export const createOwner = async (req : Request , res : Response)=>{
  try{
    const owner : Array<JSON> = await ownerModel.find();
 
    if(owner.length > 0){
      return res.status(503).json({
        message : "You don't have permission to create new owners"
      })
    }

    const {email, fullname , password} = req.body;

    const createdOwner = await ownerModel.create({
      fullname , 
      email , 
      password 
    });

    return res.status(201).json({
      createdOwner
    })

  }catch(err){
    return res.status(500).json({
      err
    })
  }
}