const { count } = require("console");
const bookModel = require("../models/bookModel");

// ********************Q1*******************
const createBook  = async function(req,res){
    let bookdata = req.body ;
    let createdbookdata = await bookModel.create(bookdata) ;
    res.send( {data : createdbookdata})
}

// ********************Q2**********************
const bookslist = async function(req ,res){
    let booksname = await bookModel.find().select({bookName: 1 , authorName: 1 , _id :0})
    res.send({data:booksname})
}
// ********************Q3**********************

const getBooksInYear = async function(req ,res){
    let year = req.body ;
    let yearofbooks = await  bookModel.find( { year : 2015} )
    res.send({msg : yearofbooks})
}
// ********************Q4**********************

const getParticularBooks = async function(req , res){
    let particularBooks = req.body ;
    let returnedBooks = await bookModel.find(particularBooks)
    res.send( { msg: returnedBooks})
}

// ********************Q5**********************
const getXINRBooks = async function(req ,res){
    let booksInr = await bookModel.find( { "prices.indianPrice" : { $in : ["Rs 100" ,"Rs 200" , "Rs 500"] } 
} )
    res.send( {msg: booksInr})
}   

// ********************Q6**********************

const getRandomBooks  = async function(req , res){
  let  RandomBooks = await bookModel.find( { $or: [  {stockAvailable : true} , {totalPages:{$gt: 500}} ]
} )
    res.send({msg : RandomBooks})
}

module.exports.getBooksInYear = getBooksInYear ;
module.exports.bookslist = bookslist ;
module.exports.createBook= createBook ;
module.exports.getParticularBooks=getParticularBooks ;
module.exports.getXINRBooks=getXINRBooks ;
module.exports.getRandomBooks=getRandomBooks ;