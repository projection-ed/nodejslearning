const ProductModel = require("../models/productModel")
module.exports.home = (req,res) => {

    let model = new ProductModel()
    model.getAllProducts()
    .then(result => {
        res.render("products/products",{
            products:result
        })
    }).catch(error => {
        console.log(error);
        res.render("products/products",{
            products:[]
        })
    })


}

module.exports.addProduct = (req,res) => {
    res.render("products/add-product")
}

module.exports.createProduct = (req,res)=>{
    const model = new ProductModel(req.body.name,req.body.description,req.body.price)
    model.addProduct((result) => {
        if (result == null || result == undefined){
            res.render("products/add-product")
        }else{
            res.redirect("/product")
        }
    })
}

module.exports.getDetails = (req,res) => {
    console.log(req.query.id);
    
    res.render("products/product-details")
}