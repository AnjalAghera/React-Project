const express = require('express')
const router = express.Router();
const tblcontactus=require("../model/tblContactusModel");

router.get( '/' ,async(req,res)=>{
    const data=await  tblcontactus.find();
    res.json(data);
});


router.put("/edit",async(req,res)=>{
    const data =await tblcontactus.findOne({emailId:req.body.emailId});
    data.address=req.body.address;
    data.emailId=req.body.emailId;
    data.contactNo= Number(req.body.contactNo);
    const result =data.save();
    res.json(data);
});

module.exports = router