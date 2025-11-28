import { app } from "./app";
import { connectDB } from "./configs/db.config";

const PORT = process.env.PORT || 3000;

// DB Connect
connectDB();

app.listen(PORT  , ()=>{
  console.log(`http://localhost:${PORT}`);
})