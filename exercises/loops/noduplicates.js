//var uniqueString = "";
//var duplicateString = "";
//
//for (var i = 0; i < inputString.length; i++)
//    uniqueString += inputString[i];
//
//for (var j = 0; j < inputString.length; j++) {
//    if (inputString[j] = inputString[i]) {
//        duplicateString += inputString[j];
//    }
//}
//
//
//
//
//console.log(uniqueString);
//console.log(duplicateString);









//var existingString = "aabbccddeeff";
//
//var stringToArray = existingString.split(" ")
//
//console.log(stringToArray);
//
//function separateStrings() {
//    var cleanString = "";
//    var duplicates = "";
//    for (var i = 0; i < stringToArray.length; i++){
//            cleanString += i;
//        }
//    
//    console.log(cleanString);
//    console.log(duplicates);
//
//}
//  
//
//separateStrings(var);
//
//
//
//console.log(res);
//
//
//
////
//var str = "How are you doing today?";
//var res =;

var inputString = "aAaBbbCccdDdeeefffggg";

var string = inputString.toLowerCase();
var uniques = "";
var duplicates = "";

for (var i = 0; i < string.length; i++);
if (uniques.indexOF(string[i]) !== -1) {
    duplicates += string[i];
    }
else {
    uniques += string[i];
}


console.log(uniques);
console.log(duplicates);