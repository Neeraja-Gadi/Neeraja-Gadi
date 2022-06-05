const express = require('express');
const router = express.Router();
const bookcontrl = require('../controllers/userController.js')


 router.post('/books' , bookcontrl.bookuserdata 
 ) ;
router.get('/booklist-get', bookcontrl.getUsersData
) ;

module.exports =router