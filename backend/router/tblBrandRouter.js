const express = require('express')
const router = express.Router();
const tblbrand=require("../model/tblBrandModel");

router.get( '/' ,async(req,res)=>{
    const data=await  tblbrand.find();
    res.json(data);
});

router.get("/detail/:id",async(req,res)=>{
    const data = await tblbrand.findOne({_id:req.params.id});
    res.json(data);
});
router.post("/add" ,async(req,res)=>{
    const today = new Date();
const dd = String(today.getDate()).padStart(2, '0'); // Day
const mm = String(today.getMonth() + 1).padStart(2, '0'); // Month (January is 0)
const yyyy = today.getFullYear(); // Year

const currentDate = mm + '/' + dd + '/' + yyyy;
    const data = tblbrand();
    data.brandName = req.body.brandName;
    data.creationDate=currentDate;
    data.updationDate=currentDate;
    const result=data.save();
    res.json(result);

});

router.put("/edit/:id",async(req,res)=>{
    const today = new Date();
const dd = String(today.getDate()).padStart(2, '0'); // Day
const mm = String(today.getMonth() + 1).padStart(2, '0'); // Month (January is 0)
const yyyy = today.getFullYear(); // Year

const currentDate = dd + '/' + mm + '/' + yyyy;
    const data =await tblbrand.findOne({_id:req.params.id});
    data.brandName=req.body.brandName;
    data.updationDate=currentDate;
    const result =data.save();
    res.json(data);
});
router.delete("/delete/:id",async(req,res)=>{
    const data =await tblbrand.deleteOne({_id:req.params.id});

    res.json(data)
});

module.exports = router