import express from "express";
import mongoose from "mongoose";
import bodyParser from 'express'
import userRouter from './routes/user.js'
import recipeRouter from './routes/recipe.js'
import cors from 'cors'
const app = express(); 

require('dotenv').config();
const url=process.env.MONGO_DB_URL;

app.use(bodyParser.json())
app.use(cors({
  origin:true,
  methods:["GET","POST","PUT","DELETE"],
  credentials:true
 
}))

// userRouter
app.use('/api',userRouter)

// recipeRouter
app.use('/api',recipeRouter)

mongoose.connect().then(()=>console.log("Database is connected")).catch((err)=>console.log(err.message));

const port = 3000;
app.listen(port, () => console.log(`server is running on port ${port}`));

// username = sumanmalakar2022;
// password = yq9euydwXXgWfkaN
