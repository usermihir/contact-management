const mongoose = require("mongoose");

const contactschema = mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"user"
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    }
},{
    timestamps:true
});

module.exports = mongoose.model("contact",contactschema)