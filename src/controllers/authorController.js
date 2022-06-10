const express = require('express');

const publisherModel = require("../models/publisherModel");
const authorModel = require("../models/authorModel");
const bookModel = require("../models/bookModel");
// *********************Q1******************
const authordetails = async function (req,res){
    let infoAuthor= req.body ;
    let infoAuthorcreated = await authorModel.create(infoAuthor) ;
    res.send ({data: infoAuthorcreated});

}
// *********************Q2******************

const publisherDetails =async function (req,res) {
    let infoPublisher =req.body ;
    let infoPublishercreated = await publisherModel.create(infoPublisher) ;
    res.send({data : infoPublishercreated})
}
// *********************Q3******************


 const bookDetails = async function(req, res) {
    //validate author
    let infoBooks = req.body
    let reqauthorId = req.body.author_id
    let reqpublisherId = req.body.publisher_id
    //Author validation  
    if (!reqauthorId) {
        res.send({ Error: 'Author feild is required'  })
    }
    const authorId = await authorModel.findById(reqauthorId)
    if (!authorId) {
        res.send({ Error: "Field value not valid"})
    }
    //publisher validation  
    if (!reqpublisherId) {
        res.send({ Error: "Publisher feild is required" })
    }
    const publisherId = await publisherModel.findById(reqpublisherId)
    if (!publisherId) { 
        res.send({ Error: "Field value not valid" })
    }
    let bookCreated = await bookModel.create(infoBooks)
    res.send({ data: bookCreated })
}


//  **********************Q4*****************************
 const alldetailsofbooks = async function(req,res){
     let authorPublisherfetch = await bookModel.find().populate('author_id').populate('publisher_id')
          res.send({data : authorPublisherfetch})
    }

// *********************Q5*************************
  const bookpublishupdate = async function (req, res) {
    let a = await bookModel.find().populate('author_id').populate('publisher_id').update(
        {'publisher_id.name': {$in: [ "Penguin","Harper Collins"]}},
        {$set: {isHardCover : true}} 
     )
           res.send({msg : a})
}
   const bookswithspecs = async function(req,res){
        let b = await bookModel.find().populate('author_id').updateOne(
           {"author_id.rating" : {$gt:3.5}},
           {$inc : {price :10}} )
       res.send({msg : b})
    }
 //*************************************************** */ 
module.exports.bookswithspecs=bookswithspecs
module.exports.alldetailsofbooks = alldetailsofbooks
module.exports.authordetails= authordetails
module.exports.publisherDetails= publisherDetails
module.exports.bookDetails = bookDetails
module.exports.bookpublishupdate= bookpublishupdate