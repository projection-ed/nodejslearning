const ProductModel = require("../models/productModel")
module.exports.home = (req,res) => {

    let model = new ProductModel()
    model.getAllProducts()
    .then(result => {
        console.log(result);
        
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

module.exports.deleteProduct = (req, res) => {
    console.log(req.params.id);
    const model = new ProductModel()
    model.deleteProductById(req.params.id)
    .then(result => {
        console.log(result);
        
        res.redirect("/product")
    }).catch(error => {
        console.log(error);
        res.redirect("/product")
    })
}

module.exports.editProduct = (req,res) => {
    console.log(req.params.productId);
    let model = new ProductModel()
    model.getProductById(req.params.productId)
    .then(result => {
        console.log(result);
        res.render("products/edit-product",{product:result})
    }).catch(erro=>{
        console.log(error);
        res.redirect("/product")
    })
}