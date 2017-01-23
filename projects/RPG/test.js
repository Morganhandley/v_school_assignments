var readLine = require("readline-sync");

class Character {
    constructor(name, hitPoints, attackPower) {
        this.Name = name;
        this.HitPoints = hitPoints;
        this.MaxAttackPower = attackPower;
    }

    attack(hitpoints) {
        return hitpoints - this.AttackPower;
    }
}

var enemies = [
	new Character("Elmo", 100, 10),
	new Character("Oscar", 200, 20),
	new Character("Bert", 300, 30)
];

var player = new Character()
player.HitPoints = 100;
player.MaxAttackPower = 50;
player.Name = readLine.question("Greetings young adventurer. Your reputation preceeds you... but, alas, my memory is fading, what do they call you again?\n");

console.log(`Ah, yes! ${player.Name} the Great!!!`);

var keyInput = "";
do {
    keyInput = readLine.question("Thank you for coming. We wouldn't have felt it necessary to involve a great warrior such as yourself if the situation was not dire! There are three monsters terrorizing our forest. Please, make haste, there is no time to lose!! \n Press 'w' to move forward or 'e' to end.\n", {
        limit: ['w', 'W', 'e', 'E']
    });
    if (GetRandomInRange(1, 4) === 1) {
        var enemyFound = enemies[GetRandomInRange(1, enemies.length) - 1];
        console.log("You found " + enemyFound.Name + "!");
        var escapeSuccessful = false;
        do {
            var fightOrFlight = readLine.question("Press 'a' to attack or 'r' to run.\n", {
                limit: ['a', 'A', 'r', 'R']
            });
            var attackStrength = 0;
            switch (fightOrFlight.toLowerCase()) {
            case "a":
                attackStrength = GetRandomInRange(1, player.MaxAttackPower);
                enemyFound.HitPoints -= attackStrength;
                console.log("You hit " + enemyFound.Name + " for " + attackStrength + "HP.\n");
                if (enemyFound.HitPoints <= 0) {
                    console.log("Enemy is dead.")
                    break;

                }
                console.log("It has " + enemyFound.HitPoints + "left.");

                break;
            case "r":
                if (GetRandomInRange(1, 2) === 1) {
                    escapeSuccessful = true;
                    console.log("You got away!");
                } else {
                    console.log("You tried to get away, but " + enemyFound.Name + "caught up with you.\n")
                }

                break;
            }

            if (!escapeSuccessful) {
                attackStrength = GetRandomInRange(1, enemyFound.MaxAttackPower);
                player.HitPoints -= attackStrength;
                console.log(enemyFound.Name + " hits you for " + attackStrength + "HP.\n");
            }
        }
        while (enemyFound.HitPoints > 0 || escapeSuccessful === false || player.HitPoints <= 0)
    }
}
while (keyInput.toLowerCase() != "e")

console.log("Thanks for playing!");

function GetRandomInRange(start, end) {
    return Math.floor(Math.random() * end) + start;
}