const MongoClient = require('mongodb').MongoClient
const uri = "mongodb+srv://jean-rafael:pancakesdeavena.666@clustercertus.6mvum.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

let client;

module.exports = function(){
    if(!client){
        try{
            client = new MongoClient(uri, {userNewUrlParser:true, usedUnifiedTopolgy:true});
        }catch(e){
            console.log("Error al conectarse a la BD", e)
        }
    }
    return client;
}