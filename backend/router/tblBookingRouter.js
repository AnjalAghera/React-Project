const express = require('express')
const router = express.Router();
const tblbooking=require("../model/tblBookingModel");
const tblVehicle=require("../model/tblVehicleModel");

router.get( '/' ,async(req,res)=>{
    const data=await tblbooking.find();
    for(let index in data){
        const veh = await tblVehicle.findOne({_id:data[index].vehicleId,})
        data[index] = {...data[index]._doc,vehicleTittle:veh.vehicleTittle}

    }
    res.json(data);
});

router.post("/mybooking",async(req,res)=>{
    const data = await tblbooking.findOne({emailId:req.body.emailId});
    res.json(data);
});
router.post("/add" ,async(req,res)=>{
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0'); // Day
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // Month (January is 0)
    const yyyy = today.getFullYear(); // Year
    
    const currentDate = dd + '/' + mm + '/' + yyyy;

    const data = tblbooking();
    data.emailId = req.body.emailId;
    data.vehicleId=req.body.vehicleId;
    data.fromDate=req.body.fromDate;
    data.toDate=req.body.toDate;
    data.message=req.body.message;
    data.status=Number(req.body.status);
    data.postingDate=currentDate;
    const result = data.save();
    res.json(result);
});

router.put("/",async(req,res)=>{
    const data =await tblbooking.findOne({emailId:req.body.emailId});
    data.fromDate=req.body.fromDate;
    data.toDate=req.body.toDate;
    data.message=req.body.message;
    data.status=Number(req.body.status);
    const result = data.save();
    res.json(result);
});

router.put("/:id", async(req,res)=>{
    const data =await tblbooking.findOneAndUpdate({_id:req.params.id},{status:req.body.status});
})

module.exports = router