const mongodb = require("mongodb")
const MongoClient = mongodb.MongoClient


let connectedClient = null;

function createConnection(){
    MongoClient.connect(process.env.DB_URL)
    .then(client => {
        console.log("Connected to MongoDB")
        connectedClient = client.db("amazon");
    })
    .catch(error=>{
        console.log("Error connecting to MongoDB",error);
    })
}

function getConnection(){
    if(connectedClient === null){
        // console.log("hello");
        
        createConnection();
    }else{
        return connectedClient;
    }
}


module.exports = {
    createConnection,
    getConnection
}