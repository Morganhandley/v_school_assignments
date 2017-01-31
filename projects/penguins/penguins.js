//***********************************************************
//                CONSTRUCTORS-CREATE PARTIES
//***********************************************************

function Team(party, population) {
    this.party = party;
    this.population = population;
}

var penguins = new Team("penguins", 1000000);

var communists = new Team("communists", 1000000);

console.log(penguins);

//***********************************************************
//               FLIP COIN - WHO ATTACKS FIRST
//***********************************************************

//var isPenguinsAttacking; 
//
//function whoStarts() {
//    return Math.floor(Math.random() * 2) + 1;
//}
//
//if (whoStarts() === 1) {
//    isPenguinsAttacking = true;
//} else {
//    isPenguinsAttacking = false;
//}

function doPenguinsStart() {
    var randomNumber = Math.floor(Math.random() * 2) + 1;
    if (randomNumber === 1) {
        return true;
    } else {
        return false;
    }
}

var isPenguinsAttacking = doPenguinsStart();


//***********************************************************
//               BATTLE TIME - SENDING NUKES
//***********************************************************

while (penguins.population > 0 && communists.population > 0) {
    if (isPenguinsAttacking) {
        sendNuke(communists, onHit, onMiss)
    } else {
        sendNuke(penguins, onHit, onMiss)
    }
}

function sendNuke(party, onHit, onMiss) {
    var hitOrMiss = Math.floor(Math.random() * 2) + 1;
    var damage = Math.floor(Math.random() * 100000) + 10000;

    if (hitOrMiss === 1) {
        function onHit() {
            console.log("Attack successful");
            attacked.population -= damage;
        }
    } else if (hitOrMiss === 2) {
        function onMiss() {
            console.log("Attack failed");
        }


    }
}