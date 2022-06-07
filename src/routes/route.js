const express = require('express');
const router = express.Router();

const bookModel = require("../models/bookModel");

const BookController= require("../controllers/bookController")

router.post("/createBook", BookController.createBook  )

router.get("/Booklist", BookController.bookslist )  

router.post("/getBooksInYear", BookController.getBooksInYear)

router.post("/getParticularBooks", BookController.getParticularBooks)

router.get("/getXINRBooks", BookController.getXINRBooks)

 router.get("/getRandomBooks", BookController.getRandomBooks)


module.exports = router;