const app = require("./app.js")

const PORT =process.env.PORT||5010;


app.listen(PORT,()=>{
   console.log(`this server is listning on http://localhost:${PORT}`)
})