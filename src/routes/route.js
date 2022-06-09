const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")

// const bookController= require("../controllers/bookController")


router.post("/authordetails", authorController.authordetails  )
router.post("/publisherDetails", authorController.publisherDetails  )
router.post("/bookDetails" , authorController.bookDetails)
router.get ('/alldetailsofbooks' , authorController.alldetailsofbooks)
router.put ('/bookpublishupdate' , authorController.bookpublishupdate)
router.put ('/bookswithspecs' , authorController.bookswithspecs)


module.exports = router;
