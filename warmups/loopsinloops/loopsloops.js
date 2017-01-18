var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];  
var alphabet = "abcdefghijklmnopqrstuvwxyz";  
//
//
//var capAlphabet = alphabet.toUpperCase();
//
//function addStrings (people, splitAlphabet) {
//   
//    var masterArray = [];
//        for (var i = 0; i < people.length; i++) {
//        masterArray.push
//        }
// 
//}

// create a function
// creat empty array to hold final string
// change alphabet to uppercase
// create for loop to push a name (people array)
// create loop to loop through alphabet individual letters (alphabet)
// push letters to final array

// console final array

// function

function forception(people, alphabet) {
    var finalArray = [];
    alphabet = alphabet.toUpperCase();
    for (var i = 0; i < people.length; i++) {
        finalArray.push(people[i] + ":");
        
    for (var j = 0; j < alphabet.length; j++) {
        finalArray.push(alphabet[j]);
    }
    }
    return finalArray;
}

console.log(forception(people, alphabet));

