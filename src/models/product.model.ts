import mongoose, { Model }  from "mongoose";

const productSchema = new mongoose.Schema({
  image : String , 
  name : String , 
  price :Number , 
  discount:{
    type : Number ,
    default : 0
  }, 
  bgColor : String ,  
  paneColor : String , 
  textColor : String 
});


export const productModel = mongoose.model("product" , productSchema);