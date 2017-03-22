function CreateTeam(party, population) {
    this.party = party;
    this.population = population;
}

var penguins = new CreateTeam("penguins", 1000000);
var communists = new CreateTeam("communists", 1000000);
var isPenguinsAttacking;


function whoStarts() {
    var coinFlip = Math.floor(Math.random() * (3 - 1) + 1);

    if (coinFlip === 1) {
        console.log('Penguins attack first');
        sendNuke(communists, onHit, onMiss);
        console.log(communists);
    } else {
        console.log(communists);
        isPenguinsAttacking = false;
        console.log('Communists attack first');
        sendNuke(penguins, onHit, onMiss);
    }
}

whoStarts();


function sendNuke(party, onHit, onMiss) {
    console.log(party.party);
    console.log('sendnuke!!!!');
    var hitOrMiss = Math.floor(Math.random() * (3 - 1) + 1);
    if (hitOrMiss === 1) {
        console.log('hit');
        return onHit(party);
    } else if (hitOrMiss === 2) {
        console.log('miss');
        return onMiss(party);
    }
}

function onHit(party) {
    damage = Math.floor(Math.random() * (500000 - 10000) + 10000);
    party.population -= damage;
    console.log("Attack successful, " + party.party + "'s population is " + party.population);
    if (party.population <= 0) {
        console.log(party.party + "loses");
        return endGame();
    };
    if (party.party === 'penguins') {
        return sendNuke(communists, onHit, onMiss);
    } else return sendNuke(penguins, onHit, onMiss);
}

function onMiss(party) {
    console.log("Attack failed, " + party.party + "'s population is down to " + party.population);
    if (party.party === 'penguins') {
        return sendNuke(communists, onHit, onMiss);
    } else {
        return sendNuke(penguins, onHit, onMiss);
    }
}
function endGame() {
    console.log('game over');
}