import jwt from "jsonwebtoken";

export const generateToken = (user : any )=>{
  const key : string | undefined= process.env.JWT_KEY; 
  return jwt.sign({email : user.email  , id : user._id} , key!);
}
