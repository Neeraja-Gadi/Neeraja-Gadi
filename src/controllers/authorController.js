const publisherModel = require("../models/publisherModel");
const BookModel = require ("../models/bookModel");
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

const bookDetails = async function (req,res){
    let infoBooks = req.body ;
    let reqaId =req.body.author_id ;
    let reqpId = req.body.publisher_id ;
    console.log(reqaId) ;
    if(!reqaId){
         res.send({ msg :'author feild is required' })
     }
    else { 
        let aid = await authorModel.findById(reqaId)
        console.log(aid)
         if(!aid){
             res.send({msg : "Field value not valid"})
         }
         else {
             if (!reqpId){
                 res.send({ msg : "Publisher field id required"})
             }
             else {
                    let pid = await publisherModel.findById(reqpId);
                    console.log(pid)
                    if(!pid){
                        res.send({msg : "Field value not valid"})
                    }
                    else {
                        let createdinfoBooks = await BookModel.create(infoBooks)
                        res.send({msg : createdinfoBooks }) 
                    }
               }
          }
     }
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
        {$set: {HardCover : true}} 
     )
res.send({msg : a})
}

   const bookswithspecs = async function(req,res){
        let b = await bookModel.find().populate('author_id').updateOne(
           {"author_id.rating" : {$gt:3.5}},
           {$inc : {price :10}} )
       res.send({msg : b})
   }



module.exports.bookswithspecs=bookswithspecs
module.exports.alldetailsofbooks = alldetailsofbooks
module.exports.authordetails= authordetails
module.exports.publisherDetails= publisherDetails
module.exports.bookDetails = bookDetails
module.exports.bookpublishupdate=bookpublishupdate