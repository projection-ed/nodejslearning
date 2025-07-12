const {getConnection} = require("../database/db")
class ProductModel{
    constructor(name,description,price){
        this.name = name
        this.decription = description
        this.price = price
    }


    addProduct(){
        const db = getConnection()
        // db.
    }
}