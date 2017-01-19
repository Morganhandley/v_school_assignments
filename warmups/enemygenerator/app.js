// build final array that will contain 100 enemies

var enemyBarracks = [];

//build enemy generator

function Enemygenerator(type, hitPoints, defense){
    this.type = type;
    this.hitPoints = hitPoints;
    this.defense = defense;
    function enemygenerator(){
        console.log(this.type + this.hitPoints + this.defennse);
    }
}

// // build random parameter generator


var genericEnemy = new Enemygenerator(typeGenerator, hitPointsGenerator, defenseGenerator);

function typeGenerator(["Ancient Dragon", "Prowler", "Mighty Grunt"]){
    Math.floor(Math.random() * 3)
}

console.log()
function hitPointsGenerator(){
    if typeGenerator === "Ancient Dragon"{
        return 
    }
        
    Math.floor(Math.random( ));
}
function defenseGenerator(){
    Math.floor(Math.random)
}





var genericEnemy = enemy[i] + "= new Enemygenerator(randomType, randomHitPoints, randomDefense ); 

var returnEnemy = function(){
    var enemyBarracks = "";
    if (var i = 0; i < 100; i++){
        enemyBarracks += [i];
    } 
} 

enemyBarracks.push(genericEnemy)


// build enemy return function