var readline = require("readline-sync");

//*************************************************
//         GLOBAL VARIABLES AND FUNCTIONS
//*************************************************

var player = readline.question('\nGreetings young adventurer, what is your name? \n')

var player = {
    name: player,
    hitPoints: 200,
    attackPower: 80
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


//*************************************************
//                   INTRO MODE
//*************************************************


console.log(`\nAh yes... ${player.name} the Great.\nThank you for coming so quickly. We are truly in your debt!\n\nYour starting stats are:\n`);
console.log(player);
console.log("Best of Luck!\n\n (Just keep walking into the forest until you find monsters!)\n");
startAdventure();


//*************************************************
//                    GAME MODE
//*************************************************


function startAdventure() {
    var keyStroke = readline.question('Press [w] to walk         [q] to quit \n')

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


function fightMode(createdEnemy) {




    enemyDamage();


    console.log(`ATTACK!! Good hit! Enemy hitpoints: ${enemyDamage()}`)
    console.log(`${createdEnemy.name} attacked back!`);
    player.hitPoints = counterAttack(player, enemyAtt);

    fightOrFlight();



    function enemyDamage() {
        createdEnemy.hitPoints -= attackPower;
    }


    function counterAttack(player, enemyAttackPower, createdEnemy, createdEnemy) {
        var enemyAttackPower = randomGenerator(1, createdEnemy.attackPower);
        player.hitPoints = player.hitPoints -= enemyAttackPower;
        console.log(`Your hitpoints went down to: ${player.hitPoints}`);
    }



    if (player.hitPoints <= 0) {
        gameOver;
    } else if (createdEnemy.hitPoints <= 0) {
        console.log('${createdEnemy} is defeated!')
        startAdventure();
    }

}



function fightOrFlight(createdEnemy, player) {
    var heartsDesire = readline.question('What do you want to do?\n Press [a] to attack and [r] to run             [q] to quit\n');
    if (heartsDesire === 'a') {
        fightMode(createdEnemy);
    } else if (heartsDesire === 'q') {
        thanksForPlaying();
    } else if (heartsDesire === 'r') {
        var chanceOfEscape = randomGenerator(1, 2);
        if (chanceOfEscape === 1) {
            console.log("YOU RAN!!!");
            console.log("You got away!");
            startAdventure();
        } else {
            console.log(`YOU RAN!!!`)
            console.log(`but ${createdEnemy.name} caught you!`);
            battleMode(createdEnemy);
        }

    }

}



function battleMode() {


    var createdEnemy = enemy[randomGenerator(0, 3)];

    console.log('You found:');
    console.log(createdEnemy.name);
    fightOrFlight(createdEnemy);




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

//*************************************************
//                   WHILE LOOP
//*************************************************


while (player.hitPoints > 0) {

    var attackPower = randomGenerator(1, 80);
}