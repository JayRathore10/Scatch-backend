import mongoose from "mongoose";

interface IUser extends Document{
  email : string, 
  password : string , 
  fullname : string , 
  cart? : any[]  , 
  orders?: any[] ,
  isAdmin : boolean , 
  contact : number , 
  picture?: string 
}

const userSchema = new mongoose.Schema<IUser>({
  fullname : {
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