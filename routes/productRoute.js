const express = require("express")
const productController = require("../controllers/productController")
const productRoute = express.Router()

productRoute.get("/product",productController.home)

//Add Product
productRoute.get("/product/add-product",productController.addProduct)
productRoute.post("/product/create-product",productController.createProduct)

module.exports = productRoute