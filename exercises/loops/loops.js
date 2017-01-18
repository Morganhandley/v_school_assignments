//var myString = "vschool";
//
//for (var i=0; i <= myString.length; i++){
//    console.log(myString[i]);
//}
//
//
//
//var myString2 = "vschool";
//var mySingle = "o";
//
//
//function findLetter(myString2, mySingle) {
//    for (var i = 0; i <= myString2.length; i++) {
//        if (myString2[i] === mySingle) {
//            return myString2.indexOf(mySingle);
//        }
//    }
//    console.log(mySingle + " was not found in " + myString2);
//}
//
//console.log(findLetter);
////}

//
//var numberArray = [2, 3, 5, 42, 3425];
//
//function findnumber(numberArray) {
//    for (var i = 0; i < numberArray.length; i++) {
//        if (numberArray[i] === 42) {
//            console.log(i);
//            break;
//        } else if {
//            i === numberArray.length) {
//            console.log("no 42s were found")
//        }
//
//    }
//}

function findLowestNumber(arraryOfTen){
    var lowest = arraryOfTen[0];
    for (var i = 1; i < arraryOfTen.length; i++){
        if (arraryOfTen[i] < lowest) {
            lowest = arraryOfTen[i];
        }
    }
    return lowest;
}

console.log(findLowestNumber([2, 5, 16, 77, 89, 107, 456, 3, 22, 103]));
