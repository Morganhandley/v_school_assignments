//function addDollarSign(inputNumber) {
//    var inputNumber = [1,2,3];
//
//    var outputNumber = "";
//    console.log("$" + inputNumberString);
//    for (var i = 0; i < inputNumberString.length; i++) {
//        var preThree = outputNumber = outputNumber + inputNumber[i];
//    
//    }
//    console.log(outputNumber);
//}
//
//addDollarSign();

//
//inputNumber = "123";
//
//function addDollarSign(inputNumber) {
//    "$" + inputNumber;
//}
//
//console.log(addDollarSign());


function money(input){
    return `$${(input/100).tolocaleString(undefined, {minimumfractiondigits: 2})}`
}

console.log(money(1234567890));