import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName : {
    type : String , 
    minLength : 3  , 
    trim : true , 
  }, 
  email : String , 
  password : String , 
  cart : {
    type : Array , 
    default : []
  } ,  
  isAdmin : Boolean, 
  orders : {
    type : Array , 
    default: []
  }  , 
  contact : Number , 
  picture : {
    type : String, 
    ref : "defaultPic.jpg"
  }
});

export const userModel = mongoose.model("user" , userSchema);