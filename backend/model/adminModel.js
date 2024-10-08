const mongoose = require('mongoose');
const schema = mongoose.Schema(
    {
        userName:String,
        passWord:String
    }
);

module.exports = mongoose.model("admin",schema);
