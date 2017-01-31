var phrase = 'slimy smelly solution';


//function that takes string and outputs the num of occurances of each letter in the String

function letterCount(str) {
    var count = {};


// loop through the string to get access to each letter


for (var i = 0; i < str.length; i++) {
    var letter = str[i];
    if (count[letter] !== undefined) {
    count[letter]++
} else {
    count[letter] = 1;
}
}
console.log(count);
}

letterCount(phrase);


//create or update a property on the letter count object
// If that object already had that letter, increment it by 1
// else create a new property for that letter and set it to 1
// storage device for keeping track of letter count

// print out the letter and the number of times that letter was found