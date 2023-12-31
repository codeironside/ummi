const { stack } = require("../routes/user")

const errorHandler=(err,req,res,next)=>{ 
    const statusCode = res.status? res.statusCode:500
    res.status(statusCode).json({
        Message:err.Message,
        stack:process.env.NODE_ENV === "production"? null: err.stack
    })
    
    next()
}
module.exports={
    errorHandler,
}

