const mongoose = require("mongoose")

const connectToDb = async ()=>{
    mongoose.connect(process.env.MONGO_URL)
    .then((conn)=>{
        console.log(`database connected to the ${conn.connection.host}`)
    })
    .catch((e)=>{
        console.log(e.message)
    })
}

module.exports = connectToDb;