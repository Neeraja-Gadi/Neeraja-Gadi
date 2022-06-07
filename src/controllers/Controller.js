const bookModel = require("../models/bookModel") ;
const router = require("../routes/route");
const authorModel =require('../models/authorModel')

// ****************Question-1****************
const  createAuthor = async function (req,res){
    let authordata = req.body ;
    let createdAuthordata = await authorModel.create(authordata) ;
    res.send( {msg : createdAuthordata})
} ;

const createBook  = async function(req,res){
    let bookdata = req.body ;
    let createdbookdata = await bookModel.create(bookdata) ;
    res.send( {data : createdbookdata})
}


// ******************Question 2 *********************

const getauthor = async function (req, res) {
    let a = await  authorModel.findOne({author_name:"Chetan Bhagat"} ).select({author_id : 1 ,_id : 0})
    let b =await bookModel.find(a)
    res.send({data : b})
}  ;


// *********************Question-3 *****************
const getUpdatedPrice = async function(req,res){
    let a = await bookModel.findOneAndUpdate({name : "Two states"} , {$set : {price : 100}} , { new : true})
     let b = await authorModel.find({author_id : a.author_id})
    let price =a.price
    res.send({msg : a[0] ,  price})
 }
// **********************Question-4******************
const findBook = async function(req,res){
    let a = await bookModel.find({   price : {$gte :50 , $lte: 100}}).select({ author_id : 1 , _id :0})
    for( let i = 0 ; i< a.length; i++){
        // LOGIC 
    }
    res.send({  data : a})
}

// const findBook = async function (req, res){
//     let findbookpricerange = await bookModel.find( {price : { $gte : 50 , $lte : 100 } } ).select({ author_id :1})
//     let mapauthorname = map(x => x = await authorModel.find(findbookpricerange).select({authorName :1}))
//     res.send({data : mapauthorname })
// }


module.exports.findBook = findBook;
module.exports.getUpdatedPrice = getUpdatedPrice ;
module.exports.getauthor = getauthor ;
module.exports.createBook=  createBook ;
module.exports.createAuthor = createAuthor  ;
