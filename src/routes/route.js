const express = require('express');
const router = express.Router();
const bookModel = require('../models/bookModel')
const Controller = require('../controllers/Controller') ;


router.post('/createBook' , Controller.createBook) ;
router.post('/createAuthor' ,Controller.createAuthor) ;
router.get ('/getauthor-books' , Controller.getauthor);
router.get ('/getUpdatedPrice' , Controller.getUpdatedPrice);
router.get ('/findBook' , Controller.findBook);
//  router.get('/books-by-authorid' , Controller.bookbyauthorid)
router.get ('/authorlist' ,  Controller.authorlist)

module.exports = router;