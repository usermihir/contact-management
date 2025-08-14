const asynchandler = require('express-async-handler')
const user = require("../models/usermodel")
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')

const registeruser = asynchandler(async (req,res) =>{
    const {username,email,password} = req.body;
    if(!username || !email || !password){
        res.status(400);
        throw new Error("all fields are mandatory");
        
    }
    const useravailable = await user.findOne({email});
    if(useravailable){
        res.status(400);
        throw new Error("user already registered");
    }

    const hashedpassword = await bcrypt.hash(password,10);
    // console.log("hp:"+hashedpassword);
    const user1 = await user.create({
        username,email,password:hashedpassword
    });
    console.log(`${user1}`);
    if(user1){
        res.status(202).json({_id:user1.id,email:user1.email});

    }else{
        res.status(400);
        throw new Error("invalid");
    }
});

const loginuser = asynchandler(async (req,res) =>{
    const {email,password} = req.body;
    if(!email || !password){
        res.status(400);
        throw new Error("all fields are mandatory")
    }
    const user1 = await user.findOne({email});

    if(user1 && (await bcrypt.compare(password,user1.password))){
        const token = jwt.sign({
            user:{
                username:user1.username,
                email:user1.email,
                id:user1.id
            }
        },
        process.env.JWT_SECRET_KEY,
        {expiresIn:"15m"}
    )
        res.status(200).json({token})
    }else{
        res.status(401);
        throw new Error("email or password is not valid")
    }
});

const currentuser = asynchandler(async (req,res) =>{
     res.json(req.user);
});

module.exports = {
    registeruser,
    loginuser,
    currentuser
}