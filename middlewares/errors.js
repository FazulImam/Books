const ErrorResponse = require("../utils/errorResponse");

const errorHandler = (err,req,res,next) => {
    console.log(err.stack);
    let error = {...err};
    res.status().json({
        success : false, error : error.message || "Server Error"
    });
}