const { ObjectId } = require("mongodb")
const {getConnection} = require("../database/db")
class ProductModel{
    constructor(name,description,price){
        this.name = name
        this.decription = description
        this.price = price
    }


    addProduct(callback){
        const db = getConnection()
        db.collection(process.env.DB_NAME).insertOne({name:this.name,description:this.decription,price:this.price})
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
        return db.collection(process.env.DB_NAME).find().toArray()
    }

    deleteProductById(_id){
        const db = getConnection()
        console.log(_id);
        return db.collection(process.env.DB_NAME).deleteOne({_id:new ObjectId(_id)})
    }

    getProductById(_id){
        const db = getConnection()
       return db.collection(process.env.DB_NAME).findOne({_id:new ObjectId(_id)})
    }

    updateProductById(id,body){
        const db = getConnection()
        return db.collection(process.env.DB_NAME).updateOne({_id:new ObjectId(id)},{$set:{name:body.name,description:body.description,price:body.price}})
    }

}

module.exports = ProductModel