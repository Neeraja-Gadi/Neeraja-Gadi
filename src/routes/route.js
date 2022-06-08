const express = require('express');
const router = express.Router();
const bookModel = require('../models/bookModel')
const Controller = require('../controllers/Controller') ;


router.post('/createBook' , Controller.createBook) ;
router.post('/createAuthor' ,Controller.createAuthor) ;
router.get ('/getauthor-books' , Controller.getauthor);
router.get ('/getUpdatedPrice' , Controller.getUpdatedPrice);
router.get ('/findBook' , Controller.findBook);


module.exports = router;