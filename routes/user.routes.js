//packages
import mongoose from "mongoose";
import express from "express";

//local imports
import UserModel from "../model/user.model.js";

const userRouter = express.Router();

userRouter.post('/add-user',async (req,res)=>{
   try {
    let {userName,email,password} = req.body;
     //checking if the userName already exists in the database.
     let userExists = await UserModel.findOne({ userName: userName });

     // If exists, sending response as userName already exists.
     if (userExists) {
         return res.status(400).send("User with this userName already exists");
     }
    // adding user to the database
    let newUser = UserModel({
        userName,email,password
    })
    // saving user details into the database.
    await newUser.save();
    //sending the response.
    res.status(201).send("User registered successfully")
   } catch (error) {
    console.log(error);
   }
    
})

export default userRouter