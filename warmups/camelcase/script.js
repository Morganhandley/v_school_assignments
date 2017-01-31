//input - string
// process - takes out spaces, underscores, hyphens between words and turns into camelCase!
// output camelCase


var inputString = "morgan handley";

for (var i = 0; i < inputString.length; i++) {
    var outputWord = "";

    if (inputString[i] !== " " || inputString[i] !== "-" || inputString[i] !== "_") {
        outputWord += inputString[i];
    } else if (inputString[i] === " ") {
        var nextLetter = inputString[i+1].toUpperCase;
        

    }
    console.log(outputWord);
}