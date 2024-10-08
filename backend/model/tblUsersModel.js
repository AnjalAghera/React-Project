const mongoose = require('mongoose');
const schema = mongoose.Schema(
    {
        fullName:String,
        emailId:String,
        passWord:String,
        contactNo:String,
        regDate:String,
        updationDate:String

    }
);

module.exports = mongoose.model("tbluser",schema);