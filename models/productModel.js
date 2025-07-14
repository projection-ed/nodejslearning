const {getConnection} = require("../database/db")
class ProductModel{
    constructor(name,description,price){
        this.name = name
        this.decription = description
        this.price = price
    }


    addProduct(callback){
        const db = getConnection()
        db.collection("products").insertOne({name:this.name,description:this.decription,price:this.price})
        .then(result => {
            console.log(result);
            callback(result)
        }).catch(error => {
            console.log(error);
            callback()
        })
    }

    getAllProducts(){
        const db = getConnection()
        return db.collection("products").find().toArray()
    }
}

module.exports = ProductModel