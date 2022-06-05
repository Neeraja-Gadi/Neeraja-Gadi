const Usermodel= require("../models/userModel")
const mongoose = require('mongoose')

const bookuserdata =  async function(req,res){
    let bookdata = req.body;
    let savedbookdata = await Usermodel.create(bookdata);
    res.send({msg : savedbookdata})

}

const getUsersData= async function(req,res){
    let booklist = await Usermodel.find()
    res.send({Hai : booklist})
}

module.exports. bookuserdata=  bookuserdata
module.exports.getUsersData= getUsersData