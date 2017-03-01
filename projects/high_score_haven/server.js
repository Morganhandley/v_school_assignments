
var http = require('http');
var fs = require('fs');
var port = 3000;

function onRequest(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('./index.html', null, function (error, data) {
        if (error) {
            response.writeHead(404);
            response.write('File not found!')
        } else {
            response.write(data);
        }
        response.end();
    });
}



http.createServer(onRequest).listen(3000, function () {
    console.log("server is listening...")
});

// function onRequest(request, response) {
//     response.writeHead(200, {'Content-Type': 'text/plain'});
//     response.write('Hello World');
//     response.end();
// }


//var express = require("express");
//var app = express();
//var uuid = require("uuid");
//var bodyParser = require('body-parser');
//
//app.use(bodyParser.json());
//
//var port = 3000;
//
//var highScore = [];
//
//app.get("/highScore()", function (req, res) {
//    console.log(req)
//    res.send(bounties)
//})
//
//
//
//app.post("/highScore", function (req, res) {
//    var newPerson = req.body;
//    newPerson.id = uuid.v4();
//
//    bounties.push(newPerson);
//    res.send(newPerson);
//});
//
//
//app.get("/highScore", function (req, res) {
//    res.send(listOfPeople[i]);
//});
//
//app.delete("/highScore/:id", function (req, res) {
//    for (var i = 0; i < bounties.length; i++) {
//        if (req.params.id === bounties[i].ID) {
//            bounties.splice(i, 1);
//        }
//    }
//});
//
//app.put("/highScore/:id", function (req, res) {
//    for (var i = 0; i < bounties.length; i++) {
//        if (req.params.id === bounties[i].id);
//    }
//});

//app.listen(port, function () {
//    console.log("app is up and running and listening on port" + port)
//});