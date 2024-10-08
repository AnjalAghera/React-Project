const express = require('express')
const router = express.Router();
const tblvehicle=require("../model/tblVehicleModel");
const tblbooking = require("../model/tblBookingModel")
router.get( '/' ,async(req,res)=>{
    const data=await  tblvehicle.find();
    res.json(data);
});


router.post("/userbooking/",async(req,res)=>{
    const vehicleData = []
    try {
        if(req.params._id!=="undefined"){
        const BookingData = await tblbooking.find({emailId:req.body.emailId});
        for(let item of BookingData){
            const data = await tblvehicle.findOne({_id:item.vehicleId});
            vehicleData.push({...data._doc,fromDate:item.fromDate,toDate:item.toDate,status:item.status})
        }
        console.log(vehicleData)
        res.json(vehicleData)
    }
        
    } catch (error) {
        console.log(error);
    }
});


router.get("/detailvehicle/:_id",async(req,res)=>{
    try {
        if(req.params._id!=="undefined"){
        const data = await tblvehicle.findOne({_id:req.params._id});
        res.json(data)
    }
        
    } catch (error) {
        console.log(error);
    }
});

router.get("/:vehicleId",async(req,res)=>{
    const data = await tblvehicle.findOne({vehicleId:req.params.vehicleId});
    res.json(data);
});


router.get("/detailvehicle/:vehicleTittle",async(req,res)=>{
    const data = await tblvehicle.findOne({vehicleTittle:req.params.vehicleTittle});
    res.json(data);
});
router.post("/add" ,async(req,res)=>{
    const today = new Date();
const dd = String(today.getDate()).padStart(2, '0'); // Day
const mm = String(today.getMonth() + 1).padStart(2, '0'); // Month (January is 0)
const yyyy = today.getFullYear(); // Year

const currentDate = dd + '/' + mm + '/' + yyyy;
    const data = tblvehicle();
    data.vehicleTittle =req.body.vehicleTittle,
    data.vehicleBrand =req.body.vehicleBrand,
    data.vehicleOverview =req.body.vehicleOverview,
    data.pricePerDay=Number(req.body.pricePerDay),
    data.fuelType =req.body.fuelType,
    data.modelYear =req.body.modelYear,
    data.vimage1 =req.body.vimage1,
    data.vimage2 =req.body.vimage2,
    data.vimage3 =req.body.vimage3,
    data.regDate =currentDate,
    data.updationDate =currentDate
    const result=data.save();
    res.json(result);

});

router.put("/edit/:id",async(req,res)=>{
    const today = new Date();
const dd = String(today.getDate()).padStart(2, '0'); // Day
const mm = String(today.getMonth() + 1).padStart(2, '0'); // Month (January is 0)
const yyyy = today.getFullYear(); // Year

console.log(req.body.vehicleTittle,82);

const currentDate = dd + '/' + mm + '/' + yyyy;
    const data =await tblvehicle.findOne({_id:req.params.id});
    data.vehicleTittle = req.body.vehicleTittle,
    data.vehicleBrand =req.body.vehicleBrand,
    data.vehicleOverview =req.body.vehicleOverview,
    data.pricePerDay=Number(req.body.pricePerDay),
    data.fuelType =req.body.fuelType,
    data.modelYear =req.body.modelYear,
    data.vimage1 =req.body.vimage1,
    data.vimage2 =req.body.vimage2,
    data.vimage3 =req.body.vimage3,
    data.updationDate =currentDate
    const result =data.save();
    res.json(data);
});

router.delete("/delete/:id",async(req,res)=>{
    const data =await tblvehicle.deleteOne({_id:req.params.id});

    res.json(data)
});

module.exports = router