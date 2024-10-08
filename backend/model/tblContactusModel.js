const mongoose = require('mongoose');
const schema = mongoose.Schema(
    {
       address:String,
       emailId:String,
       contactNo:Number
    }
);

module.exports = mongoose.model("tblcontactus",schema);
