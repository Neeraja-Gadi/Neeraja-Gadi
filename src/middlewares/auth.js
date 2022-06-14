const jwt = require("jsonwebtoken");

const tokenPresentvalid =  function(req,res,next){
    let token = req.headers["x-Auth-token"];
    if (!token) 
    token = req.headers["x-auth-token"];
    if (!token)
    return res.send({status :false , msg:"token must be present" }) ;
    let tokenDecoded = jwt.verify(token , "FunctionUp-Radon" )
    if(!tokenDecoded)
    return res.send({status :false , msg : "Invalid Token"})
    next()
}


module.exports.tokenPresentvalid = tokenPresentvalid
