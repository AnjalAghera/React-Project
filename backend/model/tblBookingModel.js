const mongoose = require('mongoose');
const schema = mongoose.Schema(
    {
        emailId:String,
        vehicleId:String,
        fromDate:String,
        toDate:String,
        message:String,
        status:Number,
        postingDate:String
    }
);

module.exports = mongoose.model("tblbooking",schema);
