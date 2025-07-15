const express = require("express")
const productController = require("../controllers/productController")
const productRoute = express.Router()

productRoute.get("/product",productController.home)

//Add Product
productRoute.get("/product/add-product",productController.addProduct)
productRoute.post("/product/create-product",productController.createProduct)
productRoute.get("/product/getDetails",productController.getDetails)
productRoute.get("/product/delete/:id",productController.deleteProduct)
productRoute.get("/product/editProduct/:productId",productController.editProduct)

module.exports = productRoute