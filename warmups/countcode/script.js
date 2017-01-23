

function countCode(inputString) {
    var numberOfOccurances = 0;
    for (var i = 0; i< inputString.length; i++)
    if (inputString[i] === "m" && inputString[i+1] === "o" && inputString[i+2] === "r" 
       && inputString[i+3] === "g" && inputString[i+4] === "a" && inputString[i+5] === "n")
        numberOfOccurances += 1;
    return numberOfOccurances;
}

console.log(countCode("fdjkl;sjfkdl;amorganfdksjkafl;djskamorganjfdkls;jfakdl;amorganfjkdls;afjeoipw;jafmorganfkdl;sjfls;dafmorgan"));
    










//console.log(countCode("aaacodebbb")); 
//console.log(countCode("codexxcode"));
//console.log(countCode("cozexxcope"));


//countCode("aaacodebbb") -> 1 
//countCode("codexxcode") -> 2 
//countCode("cozexxcope") -> 2