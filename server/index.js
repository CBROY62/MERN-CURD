import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());
dotenv.config();

const PORT = process.env.PORT || 700;
const MONGODB1 = process.env.MONGODB;

mongoose.connect(MONGODB1)
 .then(() => {
  console.log("server is connected successfully");
  app.listen(PORT,()=>{
       console.log(`server is started on the port ${PORT}`)
  });
}).catch( (error)=>console.log(error));
