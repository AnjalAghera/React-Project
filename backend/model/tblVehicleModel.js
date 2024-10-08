const mongoose = require('mongoose');
const schema = mongoose.Schema(
    {
       vehicleTittle:String,
       vehicleBrand:String,
       vehicleOverview:String,
       pricePerDay:Number,
       fuelType:String,
       modelYear:String,
       vimage1:String,
       vimage2:String,
       vimage3:String,
       regDate:String,
       updationDate:String
    }
);

module.exports = mongoose.model("tblvehicle",schema);
