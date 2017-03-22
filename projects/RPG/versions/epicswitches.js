var readLine = require('readline-sync');

var player = {
    name: player,
    hitPoints: 200,
    attackPower: 60
};

var enemy = [
             new Character("Scary Ghost", 100, 70),
             new Character("Hungry Wolf", 200, 60),
             new Character("Angry Ghoul", 300, 50)
             ];

var enemyFound;

function Character(name, hitPoints, attackPower) {
    this.name = name;
    this.hitPoints = hitPoints;
    this.attackPower = attackPower;
};

var items = [];

function itemGenerator() {

    var possibleItems = [
    "PIECE OF GOLD",
    "PIECE OF SILVER",
    "IRON HAMMER",
    "CLOAK",
    "MAGIC POTION",
    "TREASURE MAP",
    "PAIR OF LEATHER SHOES"
];
    var randomItem = possibleItems[randomGenerator(0, 8)];

    console.log(`Item recovered: (${randomItem})`)
    items.push(randomItem);
};

function randomGenerator(start, end) {
    return Math.floor(Math.random() * end) + start;
};


//***************************************************************************//
//                              Start Adventure or Quit                      //
//***************************************************************************//


player.name = readLine.question('Hello, What is your name?\n');

walkOrQuit();

function walkOrQuit() {

    var answer = readLine.question(`What would you like to do ${player.name}?  (press [w] to walk or [q] to quit)\n`);

    if (answer === "w") {
        walkAndFindEnemy();
    } else if (answer === "q") {
        gameOver();
    }
};


function walkAndFindEnemy() {
    var didYouFindEnemy = randomGenerator(0, 3);

    if (didYouFindEnemy === "2") {
        enemyFound = enemy[randomGenerator(0, 2)];
        fightOrRun();
    } else {
        console.log("Hmmm, nothing here.");
        walkOrQuit();
    }

};




//***************************************************************************//
//                               Fight ot Run?                               //
//***************************************************************************//



function fightOrRun() {

    var questionFightOrRun = readLine.question(`You found ${enemyFound.name} What do you want do?    press [f] to fight, or [r] to run \n`);

    if (questionFightOrRun === "f") {
        fight();
    } else if (questionFightOrRun === "r") {
        run();
    } else if (questionFightOrRun === "q") {
        gameOver();
    }
};



function fight() {
    currentHitDamage = randomGenerator(1, 60);
    while (enemyFound.hitPoints > 0) {
        enemyFound.hitPoints -= currentHitDamage;
        if (enemyFound.hitPoints === "<=0") {
            console.log(`You defeated ${enemyFound.name}!`)
            itemGenerator();
            console.log(`Current Items: ${items}`)

            console.log("You gained 50 life points!")
            walkOrQuit();
        } else {
            console.log(`Good Hit!!!- ${currentHitDamage} points! (${enemyFound.name}'s health: ${enemyFound.hitPoints})\n`);
            enemyAttack();
        }
    }
};

function run() {
    var didYouGetAway = randomGenerator(0, 2);

    switch (didYouGetAway) {
    case "0":
        console.log(`You got Away`);
        walkOrQuit;
        break;
    default:
        console.log(`You tried to run...`);
        enemyAttack();
        break;
    }
};

function enemyAttack() {
    enemyHitDamage = randomGenerator(1, enemyFound.attackPower);
    while (player.hitPoints > 0) {
        player.hitPoints -= enemyHitDamage;

        switch (player.hitPoints) {
        case "<=0":
            console.log(`${enemyFound.name} defeated you.`);
            gameOver();
            break;
        default:
            console.log(`...but ${enemyFound.name} attacked you ${enemyHitDamage} points.`);
            console.log(`(Your health: ${player.hitPoints})`);
            fightOrRun();
            break;

        }
    }
}


//***************************************************************************//
//                          game ending functions                            //
//***************************************************************************//

function gameOver() {
    console.log("G A M E  O V E R")
}
