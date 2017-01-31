var readline = require("readline-sync");

//*************************************************
//         GLOBAL VARIABLES AND FUNCTIONS
//*************************************************

var player = readline.question('\nGreetings young adventurer, what is your name? \n')

var player = {
    name: player,
    hitPoints: 200,
    attackPower: 30
}

var randomGenerator = function (start, end) {
    return Math.floor(Math.random() * end) + start;
}



var enemy = [
             new Character("Scary Ghost", 100, 10),
             new Character("Hungry Wolf", 200, 20),
             new Character("Angry Ghoul", 300, 30)
             ];



function Character(name, hitPoints, attackPower) {

    this.name = name;
    this.hitPoints = hitPoints;
    this.attackPower = attackPower;
}

var createdEnemy = new Character(enemy[randomGenerator(0, 3)]);






//*************************************************
//                   INTRO MODE
//*************************************************


console.log(`\nAh yes... ${player.name} the Great.\nThank you for coming so quickly. We are truly in your debt!\n\nYour starting stats are:`);
console.log(player);
console.log("Best of Luck!");
startAdventure();


//*************************************************
//                    GAME MODE
//*************************************************


function startAdventure() {
    var keyStroke = readline.question('Press [w] to walk            [q] to quit \n')

    if (keyStroke === "q") {
        thanksForPlaying();
    } else if (keyStroke === "i") {
        console.log(player)
    } else if (keyStroke === "w") {
        var chanceOfAttack = randomGenerator(0, 3);
        if (chanceOfAttack === 0) {
            battleMode();
        } else startAdventure();
    }
}

function battleMode() {



    console.log('You found:');
    console.log(createdEnemy.name);

    var fightOrFlight = readline.question('What do you want to do?\n Press [a] to attack and [r] to run             [q] to quit\n');
    if (fightOrFlight === 'a') {
        fightMode();
    } else if (fightOrFlight === 'q') {
        thanksForPlaying();
    } else if (fightOrFlight === 'r') {
        var chanceOfEscape = randomGenerator(1, 2);
        if (chanceOfEscape === 1) {
            console.log("You got away!");
            startAdventure();
        } else {
            console.log("You were caught!");
            fightMode();

        }
    }
}

function fightMode() {


    while (player.hitPoints || createdEnemy.hitPoints > 0) {
        var attackPower = randomGenerator(1, 30);

        function attack() {
            createdEnemy.hitPoints -= attackPower;

        }
        console.log(createdEnemy);


        if (player.hitPoints <= 0) {
            gameOver;
        } else if (createdEnemy.hitPoints <= 0) {
            console.log('${createdEnemy} is defeated!')
            startAdventure();
        }
        player.hitPoints = 0;
    }
    console.log("Good hit!")
    console.log(createdEnemy.hitPoints);
}





//*************************************************
//                 GAME OVER/END MODE
//*************************************************

function thanksForPlaying() {
    console.log("Thanks for playing!")
}

function gameOver() {
    console.log("********* GAME OVER *********");
}