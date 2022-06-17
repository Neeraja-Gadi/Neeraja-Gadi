const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const weatherController =require("../controllers/weatherController")

// router.get("/cowin/states", CowinController.getStates)
// router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
// router.get("/cowin/getByPin", CowinController.getByPin)

// router.post("/cowin/getOtp", CowinController.getOtp)
router.get("/cowin/getBydistrictId", CowinController.getBydistrictId)

router.get("/openweather/getWeather", weatherController.getWeather)

router.get("/openweather/getCitiesSorted", weatherController.getCitiesSorted)

router.get("/imgflip/getmemes", weatherController.getmemes)

router.post("/imgflip/postmemes", weatherController.postmeme)


module.exports = router;