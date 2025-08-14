const {constants} = require("../constants")
const errorhandler = (err,req,res,next) =>{
    const statuscode = res.statusCode ? res.statusCode : 500;
    switch(statuscode){
        case constants.VALIDATION_ERROR:
            res.json({
                title:"validation failed" ,
                message:err.message,
                stackTrace:err.stack
                });
            break;
        case constants.NOT_FOUND:
            res.json({
                title:"Not found" ,
                message:err.message,
                stackTrace:err.stack
            })
            break;
        case constants.UNAUTHORIZED:
            res.json({
                title:"unauthorized" ,
                message:err.message,
                stackTrace:err.stack
            })
            break;
        case constants.FORBIDDEN:
            res.json({
                title:"forbidden" ,
                message:err.message,
                stackTrace:err.stack
            })
            break;
        case constants.SERVER_ERROR:
            res.json({
                title:"server error" ,
                message:err.message,
                stackTrace:err.stack
            })
            break;
        default:
            console.log("no error");
            break;
    }
    
    
};

module.exports = errorhandler;