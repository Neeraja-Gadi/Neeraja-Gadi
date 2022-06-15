const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const middleware = require("../middlewares/auth")
router.post("/users", userController.createUser  )

router.post("/login", userController.loginuser)

router.get("/users/:userId",middleware.tokenAuthentication, middleware.tokenAuthorisation, userController.getUserData)

router.put("/users/:userId",middleware.tokenAuthentication, middleware.tokenAuthorisation, userController.updateUser)

router.delete("/users/:userId",middleware.tokenAuthentication, middleware.tokenAuthorisation, userController.deleteUser )

module.exports = router;
