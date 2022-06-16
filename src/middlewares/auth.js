const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
const tokenAuthentication =  function(req,res,next){
    try{
        let token = req.headers["x-Auth-token"];
        if (!token) 
        token = req.headers["x-auth-token"];
        if (!token)
        return res.status(401).send({status :false , msg:"token must be present" }) ;
        let tokenDecoded = jwt.verify(token , "FunctionUp-Radon" )
        if(!tokenDecoded)
        return res.status(401).send({status :false , msg : "Invalid Token"})
    }
    catch (error) {
        res.status(500).send({err : error.message})
      }
    next()
}

const tokenAuthorisation =  async function(req, res, next){
    try{
        let token = req.headers["x-Auth-token"];
    if (!token) 
    token = req.headers["x-auth-token"];

    let tokenDecoded = jwt.verify(token , "FunctionUp-Radon" )

    let userToBeModified = req.params.userId
    let userLoggedIn = tokenDecoded.userId

    let user = await userModel.findById(userToBeModified);
    if (!user) {
      return res.status(400).send("No such user exists");
    }
    if(userToBeModified != userLoggedIn) {
        return res.status(403).send({status: false, msg: 'User logged is not allowed to modify the requested users data'})
    }
    }
    
    catch (error) {
        res.status(500).send({err : error.message})
      }
    next()
}
module.exports = {tokenAuthentication , tokenAuthorisation } 
