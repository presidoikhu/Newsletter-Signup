//jshint esversion:6






const express = require("express");
const bodyparser = require("body-parser");
const request = require ("request");

const app = express();

app.use(express.static('public'));
app.use(bodyparser.urlencoded({extended:true}));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/signup.html');
  });
  
    app.post('/', function(req, res) {
      
        var firstName  = req.body.fName;
        var lastName  = req.body.lName;
        var email  = req.body.email;

        console.log(FirstName, LastName, email);
      });
      
    
    


app.listen(3000, function() {
console.log("server is running on port 3000");


});


//API KEY
//d4ae0f54a94fd8dfc78e06af44c2b9bf-us12