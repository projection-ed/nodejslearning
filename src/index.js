const express = require("express")
const path = require("path")
const hbs = require("hbs")
const productRoute = require("../routes/productRoute")
const staticPath = path.join(__dirname,"../public")
const partialsPath = path.join(__dirname,"../views/partials")
const {createConnection} = require("../database/db")
const app = express()

//Setting Template engine
app.set("view engine","hbs")
app.use(express.urlencoded({extended:true}))
app.use(productRoute)
app.use(express.static(staticPath))
createConnection()
hbs.registerPartials(partialsPath)

app.listen(3000,() =>{
    console.log("Server has been created at http://localhost:3000/");
})