const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

// ******************QUESTION- 1******************************

const createUser = async function (req, res) {
  try{
    let userData = req.body;
    console.log(userData) ;
     if ( Object.keys(userData).length != 0) {
      let saveduserData = await userModel.create(userData);
      res.status(201).send({ msg: saveduserData });
    }
    else res.status(400).send({ msg: "BAD REQUEST"})
    }
   catch (error) {
  res.status(500).send({err : error.message})
}
}
  // ******************QUESTION- 2******************************
  
 const loginuser = async function (req,res){
  try{
 let emailinfo = req.body.emailId ;
 let passlock = req.body.password ;
 let login = await userModel.findOne({emailId : emailinfo , password :passlock })
  if (!login)
  return  res.status(400).send({status: false ,msg :"Invalid"}) ;
// token generation
let token = jwt.sign (
  {
   userId: login._id.toString() ,
   batch : "Radon" ,
   Org : "FunctionUp"
  } , "FunctionUp-Radon"
) ;
res.setHeader("x-auth-token" ,token) 
 return  res.status(200).send({token: token})
}
catch(error){
  res.status(500).send({err : error.message})
}
 } ;

// ***********************QUESTION- 3****************************

const getUserData = async function (req, res) {
  try{
    let userId = req.params.userId;
    let userDetails = await userModel.findById(userId);
    res.status(200).send({ status: true, data: userDetails });
  }
  catch (error) {
    res.status(500).send({err : error.message})
  }
};

// ************************QUESTION- 4*****************************

 const updateUser = async function (req, res) {
  try{
    let userId = req.params.userId;
    let user = await userModel.findById(userId);
     let userData = req.body;
     let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
     res.status(200).send({ status: updatedUser, data: updatedUser });
  }
  
   catch (error) {
    res.status(500).send({err : error.message})
  }
};

// **************************QUESTION- 5********************************

const deleteUser = async function(req,res){
  try{
    let userId = req.params.userId;
    let user = await userModel.findById(userId);
    let deletedUser =await userModel.findOneAndUpdate(
      {_id :userId} ,{$set : {isDeleted : true}} ,{new :true}
      )
      res.status(200).send({deletedUser : deletedUser})
  }
  catch (error) {
        res.status(500).send({err : error.message})
  }
} ;

module.exports = {createUser ,getUserData ,updateUser, loginuser , deleteUser}  ;
