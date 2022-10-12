const app = require("./app")
const dotenv = require("dotenv")
const connectDatabase = require("./configration/database")
dotenv.config({path:"backend/configration/config.env"})
connectDatabase()
let port = 4000


app.listen(process.env.PORT,()=>{
    console.log(`server is running on http://localhost:${process.env.PORT}||${port}`)
})