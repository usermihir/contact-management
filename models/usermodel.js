const mongoose = require('mongoose');

const userschema = mongoose.Schema({
    username:{
        type:String,
        required:[true,"username required"]
    },
    email:{
        type:String,
        required:[true,"email required"],
        unique:[true,"email already registered"]
    },
    password:{
        type:String,
        required:[true,"password required"]
    }
},{
    timestamps:true
});

module.exports = mongoose.model("user",userschema);