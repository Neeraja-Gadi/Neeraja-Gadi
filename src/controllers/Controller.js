const bookModel = require("../models/bookModel") ;
const router = require("../routes/route");
const authorModel =require('../models/authorModel');
const { off } = require("../models/bookModel");

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
    let a = await  authorModel.find({author_name:"Chetan Bhagat"} ).select({author_id : 1 ,_id : 0})
    console.log(a)
    let b =await bookModel.find(a)
    res.send({data : b})
}  ;


// *********************Question-3 *****************
 const getUpdatedPrice = async function(req,res){
    let a = await bookModel.findOneAndUpdate({name : "Two states"} , {$set : {price : 100}} , { new : true})
           console.log(a)
     let b = await authorModel.find({author_id : a.author_id}).select({author_name : 1 , _id :0})
     console.log(b)
    let price =a.price
    let an= b[0].author_name ;
    res.send({ an, price } )  
 }

//  **********************Question-4******************
const findBook = async function(req,res){
    let a = await bookModel.find({   price : {$gte :50 , $lte: 100}}).select({ author_id : 1 , _id :0})
    // console.log(a)
     for( let i = 0 ; i< a.length; i++){
          a[i] = await  authorModel.find(a[i] ).select({author_name :1 ,_id :0})    
     }
      res.send({  data : a})
 } ;

//  ***************************Question-5*****************
// const bookbyauthorid = async function (req,res){
//     // Let x = req.params ;
//     let a  = await bookModel.find().select({name :1 , _id : 0})
//     // let b = await authorlist.find(author_id).
//     console.log(a)
    
//     res.send({data : a})
//     }

// **************Question-6  ********************

const authorlist = async function(req,res){
  let a  = await  bookModel.find({ratings :{$gt : 4}}).select({author_id : 1 , _id : 0})
   for  (i = 0 ; i < a.length ; i++) {
        b = await authorModel.find({ $and : [{age : {$gt : 50}} , a[i]] }).select({author_name : 1 ,age :1 , _id : 0})
   }
   console.log(b);
  res.send({msg : b})
}

 module.exports.findBook = findBook;
module.exports.getUpdatedPrice = getUpdatedPrice ;
 module.exports.getauthor = getauthor ;
module.exports.createBook=  createBook ;
module.exports.createAuthor = createAuthor  ;
// module.exports.bookbyauthorid=bookbyauthorid ;
module.exports.authorlist=  authorlist ;