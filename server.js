const express = require("express");
const app = express();

const mongoose = require("mongoose");
//local
// mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});
//remote 
mongoose.connect('mongodb+srv://lalitha:ramlalli@86@lalithadb.u5j87.mongodb.net/lalithaDB?retryWrites=true&w=majority', {useNewUrlParser: true});

// mongodb+srv://mongo_lalitha:<password>@mongooseappcluster.leuky.mongodb.net/<dbname>?retryWrites=true&w=majority
const db = mongoose.connection



  
  db.once('open', function() {
    console.log("db connected")
  });

  db.on('error', function(error){
    console.log("couldn't connect to db",error);
  });

  app.use(express.json());
// app.use(bodyParser.urlencoded({
//     extended: true
// }));



// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://lalitha:ramlalli@86@lalithadb.u5j87.mongodb.net/lalithaDB?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });


var cors = require("cors");
app.use(cors());

// var books = require('./routes/books');
// app.use('/books' ,books);

var port = 8000;
app.listen(process.env.PORT || port, function(){
    console.log('app listening on port: '+port);
});