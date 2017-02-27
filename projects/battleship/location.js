function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max-min +1)) + min;
}
   
console.log(getRandomInt(1,100));
    
//var Location = require("./main");
//
//function makeBoard() {
    //outer array to hold everything
//    var board = [];
//    for (var i = 0; i < 10; i++) {
//    var row = [];
//    for (var j = 0; j < 10; j++) {
//        row.push(new location());
//    }
//}mk
//board.push(row);
//}
//return board;
//}
//console.log(board);

//function to display the grid - loop through the grid and creating a new one with just the 'display' property on the //location objects    


//function main game - user input, validation, loops to keep the game running, etc.