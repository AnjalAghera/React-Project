const express = require('express')
const router = express.Router();
const tblpages=require("../model/tblPagesModel");

router.get( '/' ,async(req,res)=>{
    const data=await  tblpages.find();
    res.json(data);
});

router.get("/detailtype",async(req,res)=>{
    const data = await tblpages.findOne({type:req.body.type});
    res.json(data);
});
router.post("/add" ,async(req,res)=>{
    const data = tblpages();
    data.pageName = req.body.pageName;
    data.type = req.body.type;
    data.detail = req.body.detail;
    const result=data.save();
    res.json(result);

});

router.put("/edit",async(req,res)=>{
    const data =await tblpages.findOne({type:req.body.type});
    data.pageName=req.body.pageName;
    data.detail = req.body.detail;
    const result =data.save();
    res.json(data);
});

module.exports = router