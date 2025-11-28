import {Request , Response} from "express";

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