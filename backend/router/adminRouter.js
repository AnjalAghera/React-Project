const express = require('express')
const router = express.Router();
const admin=require("../model/adminModel");
const jwt = require("jsonwebtoken")

router.get( '/' ,async(req,res)=>{
    console.log("----");
    const data=await  admin.find();
    res.json(data);
});

router.post("/login" ,async(req,res)=>{

    console.log(req.body);

    const data=await admin.findOne({userName:req.body.userName});
    if(data && data.passWord==req.body.passWord){
        const token = await jwt.sign({userName:req.body.userName},"eyJhbGciOiJIUzI1NiIsInR5cCI6Ikph");
        console.log(token);
        res.cookie('jwt',token)
        res.send("")
    }
    else {
        res.status(401).json({msg:"incorrect email or password"})
    }
});

router.put("/changepassword",async(req,res)=>{
    const data =await admin.findOne({userName:"admin"});
    // const result = admin();
    data.passWord=req.body.newpass1;
    data.save();
    res.json(data);
});

module.exports = router