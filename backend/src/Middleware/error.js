const ErrorHandler = require("../utils/ErrorHandler")


module.exports=(err,req,res,next)=>{
    err.message=err.message || "Internal Server Error",
    err.statusCode=err.statusCode || 500

    if(err.message=="ValidationError"){
        err =next(new ErrorHandler(message,400))
    }
}