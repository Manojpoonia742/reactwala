const jwt = require('jsonwebtoken');
const express = require("express");
const User = require("../models/User");
const dotenv=require('dotenv').config()
const JWT_SECRET=process.env.JWT_SECRET
const router = express.Router();


//API call for createing User
router.post("/", async (req, res) => {
  if(await User.findOne({email:req.body.email})){
    res.send('User with this email already exist')
  }
  else{
    const keypassword=jwt.sign(req.body.password,JWT_SECRET)
    const user=new User({email:req.body.email,password:keypassword})
    user.save()
    res.json(user)
  }
});

//API call for Login a User


module.exports=router