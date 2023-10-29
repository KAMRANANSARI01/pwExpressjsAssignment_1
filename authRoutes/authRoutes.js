const express = require("express")
const authRouter = express.Router()
const {signUP} = require("../controllers/authController.js")
authRouter.post('/signup',signUP)

module.exports = authRouter;