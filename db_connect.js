const mongo = require('mongoose');
module.exports=function connect(dbname) {
    mongo.connect("mongodb://localhost:27017/" + dbname).then(console.log("Sucessfully ! connected to database")).catch(err => console.log(err))
}