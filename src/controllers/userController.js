const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

// ******************QUESTION- 1******************************

const createUser = async function (req, res) {
  let userData = req.body;
  let saveduserData = await userModel.create(userData);
    res.send({ msg: saveduserData });
};
// ******************QUESTION- 2******************************
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

// ***********************QUESTION- 3****************************

const getUserData = async function (req, res) {
  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });
  res.send({ status: true, data: userDetails });
};

// ************************QUESTION- 4*****************************

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

// **************************QUESTION- 5********************************

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
