 var createdEnemy = {
     name: "Morgan",
     hitPoints: 100,
     attackPower: 200
 }

 function getStats() {
     console.log('Current Stats:');
     console.log(createdEnemy.name);
     console.log(`His hitpoints are ${createdEnemy.hitPoints}`);
     console.log(`His attack power is ${createdEnemy.attackPower}`);
 }



 function damage() {
     createdEnemy.hitPoints -= 10;
 }

 damage();
 getStats();

