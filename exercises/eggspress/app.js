var express = require("express");
var app = express();


app.get('/', function (req, res) {
    res.send("this is something I can do all by myself!!");
});


app.use((req, res, next) => {
    console.log('One');rs
});






app.listen(3000, function() {
           console.log("app is listening on port 3000!")
           });