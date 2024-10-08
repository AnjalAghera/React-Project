const express = require('express')
const router = express.Router();
const jwt = require('jsonwebtoken');
const tblusers=require("../model/tblUsersModel");

router.post( '/' ,async(req,res)=>{
    console.log(req.body);
    const data = await  tblusers.findOne({emailId:req.body.emailId});
    if(data){
        const token = await jwt.sign({emailId:req.body.emailId},"eyJhbGciOiJIUzI1NiIsInR5cCI6Ikph");
        console.log(token);
        res.cookie('jwt',token)
        res.send("")
    }else{
        res.status(401).json({msg:"incorrect email or password"})
    }
});

module.exports = router