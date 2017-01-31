 function battleMode() {

     function randomGenerator(start, end) {
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


     console.log(createdEnemy);

 }
