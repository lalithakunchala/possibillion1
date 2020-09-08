const express = require("express");
const app = express();
const mongoose = require("mongoose");
//local
// mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

mongoose.connect('<mongoD-URI>', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', function(){
    console.log("couldn't connect to db");
  });
  
  db.once('open', function() {
    console.log("db connected")
  });

  app.use(express.json());


var cors = require("cors");
app.use(cors());

var user = require('./routes/auth');
app.use('/auth' ,user);

var port = 8000;
app.listen(port, function(){
    console.log('app listening on port: '+port);
});
