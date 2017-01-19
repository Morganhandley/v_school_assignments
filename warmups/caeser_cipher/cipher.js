var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",]


var ask = require('readline-sync');  

var input = ask.question('What phrase would you like to encrypt? ').toLowerCase();  

var shift = parseInt(ask.question('How many letters would you like to shift? '));  

var output = function(){
    var newWord = [];
    var arrayInput = input.split("");
    for (var i = 0; i < arrayInput.length; i++){
        
        newWord.push(alphabet[i] + shift)
       
    }
    console.log(newWord);
}


output();
