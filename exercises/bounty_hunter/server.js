var express = require("express");
var app = express();
var uuid = require("uuid");
var bodyParser = require('body-parser');

app.use(bodyParser.json());

var port = 8000;

var bounties = [
    {
        firstName: 'Luke',
        LastName: 'Skywalker',
        isLiving: true,
        bountyAmount: '500',
        Type: 'Jedi',
        ID: uuid.v4()
    },
    {
        firstName: 'Jar-Jar',
        LastName: 'Binks',
        isLiving: true,
        bountyAmount: '2000',
        Type: 'Sith',
        ID: uuid.v4()
    },
    {
        firstName: 'Padme',
        LastName: 'Amidala',
        isLiving: true,
        bountyAmount: '500',
        Type: 'Queen',
        ID: uuid.v4()
    },
]

app.get("/bounties()", function (req, res) {
    console.log(req)
    res.send(bounties)
})



app.post("/bounties", function (req, res) {
    var newPerson = req.body;
    newPerson.id = uuid.v4();

    bounties.push(newPerson);
    res.send(newPerson);
});


app.get("/bounties", function (req, res) {
    res.send(listOfPeople[i]);
});

app.delete("/bounties/:id", function (req, res) {
    for (var i = 0; i < bounties.length; i++) {
        if (req.params.id === bounties[i].ID) {
            bounties.splice(i, 1);
        }
    }
})

app.put("/bounties/:id", function (req, res) {
    for (var i = 0; i < bounties.length; i++) {
        if (req.params.id === bounties[i].id;
    }
})

var listOfPeople = [];

app.listen(port, function () {
    console.log("app is up and running and listening on port" + port)
});