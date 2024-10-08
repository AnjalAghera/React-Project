const mongoose = require('mongoose');
const schema = mongoose.Schema(
    {
        brandName:String,
        creationDate:String,
        updationDate:String
    }
);

module.exports = mongoose.model("tblbrand",schema);
