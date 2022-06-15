const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
const tokenAuthentication =  function(req,res,next){
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

const tokenAuthorisation =  async function(req, res, next){
    let token = req.headers["x-Auth-token"];
    if (!token) 
    token = req.headers["x-auth-token"];

    let tokenDecoded = jwt.verify(token , "FunctionUp-Radon" )

    // let userId = req.params.userId;
    let userToBeModified = req.params.userId
    let userLoggedIn = tokenDecoded.userId

    let user = await userModel.findById(userToBeModified);
    if (!user) {
      return res.send("No such user exists");
    }
    if(userToBeModified != userLoggedIn) {
        return res.send({status: false, msg: 'User logged is not allowed to modify the requested users data'})
    }
    next()
    
}
module.exports = {tokenAuthentication , tokenAuthorisation } 
