const express = require('express')
const router = express.Router();
const jwt = require('jsonwebtoken');
const tblusers=require("../model/adminModel");

router.post( '/login' ,async(req,res)=>{
    console.log(req.body);
    const data = await  tblusers.findOne({userName:req.body.userName});
    if(data){
        const token = await jwt.sign({userName:req.body.userName},"eyJhbGciOiJIUzI1NiIsInR5cCI6Ikph");
        console.log(token);
        res.cookie('jwt',token)
        res.send("")
    }else{
        res.status(401).json({msg:"incorrect email or password"})
    }
});

module.exports = router