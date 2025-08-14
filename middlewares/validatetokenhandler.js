const asynchandler = require('express-async-handler');
const jwt = require('jsonwebtoken');

const validatetoken = asynchandler(async (req,res,next) =>{
    let token;
    let authheader = req.headers.authorization || req.headers.Authorization

    if(authheader && authheader.startsWith("Bearer")){
        token = authheader.split(" ")[1];
        if(!token){
            res.status(401);
            throw new Error("user or token error")
        }
        jwt.verify(token,process.env.JWT_SECRET_KEY,(err,decoded) =>{
            if(err){
                res.status(401);
                throw new Error("user not authorized");
            }
            // console.log(decoded);
            req.user = decoded.user;
            next();
        });
        
    }
})

module.exports = validatetoken;