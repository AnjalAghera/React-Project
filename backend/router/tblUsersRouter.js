const express = require('express')
const router = express.Router();
const tblusers=require("../model/tblUsersModel");

router.get( '/' ,async(req,res)=>{
    const data=await  tblusers.find();
    res.json(data);
});

router.get("/detailuser",async(req,res)=>{
    const data = await tblusers.findOne({emailId:req.body.emailId});
    res.json(data);
});
router.post("/add" ,async(req,res)=>{
    const today = new Date();
const dd = String(today.getDate()).padStart(2, '0'); // Day
const mm = String(today.getMonth() + 1).padStart(2, '0'); // Month (January is 0)
const yyyy = today.getFullYear(); // Year

const currentDate = dd + '/' + mm + '/' + yyyy;
    const data = tblusers();
    data.fullName=req.body.fullName,
    data.emailId=req.body.emailId,
    data.passWord=req.body.passWord,
    data.contactNo=req.body.contactNo,
    data.regDate=currentDate;
    data.updationDate=currentDate;
    const result=data.save();
    res.json(result);

});

router.put("/edit",async(req,res)=>{
    const today = new Date();
const dd = String(today.getDate()).padStart(2, '0'); // Day
const mm = String(today.getMonth() + 1).padStart(2, '0'); // Month (January is 0)
const yyyy = today.getFullYear(); // Year

const currentDate = dd + '/' + mm + '/' + yyyy;
    const data =await tblusers.findOne({emailId:req.body.emailId});
    data.fullName=req.body.fullName,
    data.emailId=req.body.emailId,
    data.passWord=req.body.passWord,
    data.contactNo=req.body.contactNo,
    data.updationDate=currentDate;
    const result =data.save();
    res.json(data);
});

module.exports = router