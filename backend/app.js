const { application } = require("express")
const express = require("express")

const app = express()

app.use(express.json())
const errormiddleWare = require("./middleware/error")
const product = require("./routes/productRoutes")

app.use("/api/v1",product)

//errorMidleWare
app.use(errormiddleWare)


module.exports = app