const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  let userData = req.body;
  let saveduserData = await userModel.create(userData);
    res.send({ msg: saveduserData });
};
// ***********************************************************
 const loginuser = async function (req,res){
 let emailinfo = req.body.emailId ;
 let passlock = req.body.password ;
 let login = await userModel.findOne({emailId : emailinfo , password :passlock })
//  res.send({msg : login})
if (!login)
  return res.send({status: false ,msg :"Invalid"}) ;
// token generation
let token = jwt.sign (
  {
   userId: login._id.toString() ,
   batch : "Radon" ,
   Org : "FunctionUp"
  } , "FunctionUp-Radon"
) ;
res.setHeader("x-auth-token" ,token) 
 return res.send({token: token})
 } ;

// ****************************************************************
  // Once the login is successful, create the jwt token with sign function
  // Sign function has 2 inputs:
  // Input 1 is the payload or the object containing data to be set in token
  // The decision about what data to put in token depends on the business requirement
  // Input 2 is the secret
  // The same secret will be used to decode tokens
   
  const getUserData = async function (req, res) {
  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });
  res.send({ status: true, data: userDetails });
};

// ***************************************************************

 const updateUser = async function (req, res) {
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
//Return an error if no user with the given id exists in the db
  if (!user) 
    return res.send("No such user exists");
   let userData = req.body;
   let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
   res.send({ status: updatedUser, data: updatedUser });
};

// **********************************************************************
// Write a **DELETE api /users/:userId** that takes the userId in the path params 
// and marks the isDeleted attribute for a user as true.
//  Check that request must contain **x-auth-token** header. If absent, return a suitable error.

const deleteUser = async function(req,res){
  // let token = req.headers['x-Auth-token'] ;
  let userId =req.params.userId ;
  let deletedUser =await userModel.findOneAndUpdate(
              {_id :userId} ,{$set : {isDeleted : true}} ,{new :true}
              )
      res.send({deletedUser : deletedUser})
}
module.exports.createUser = createUser
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginuser = loginuser;
module.exports.deleteUser = deleteUser ;
