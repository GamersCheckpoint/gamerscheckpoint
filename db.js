const MongoCLient  = require('mongodb').MongoClient
const uri ="mongodb+srv://jean-rafael:eljaja.7@clustercertus.6mvum.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

let client;

module.export = function(){
    client = new MongoCLient(uri, {useNewUrlParser:true, useUnifiedTopology:true});
    return client;
}