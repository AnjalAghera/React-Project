const mongoose = require('mongoose');
const schema = mongoose.Schema(
    {
        pageName:String,
        type:String,
        detail:String,
    }
);

module.exports = mongoose.model("tblpage",schema);
