const express = require("express");
const authRouter = require("./authRoutes/authRoutes.js")
const connectToDb = require("./config/dbConfig.js")
require("dotenv").config()
connectToDb()

const app = express();
app.use(express.json())
app.use('/api/auth',authRouter)
app.use("/",(req,res)=>{
   res.status(200).json({
      data : "HEllo0000000 world"
   })
})

module.exports=app;