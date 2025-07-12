module.exports.home = (req,res) => {
    res.render("products/products")
}

module.exports.addProduct = (req,res) => {
    res.render("products/add-product")
}

module.exports.createProduct = (req,res)=>{
    console.log(req.body);
    
    res.render("products/add-product")
}