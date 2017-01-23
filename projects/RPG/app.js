var readline = require("readline-sync");
var ask = require('readline-sync');

var firstName = ask.question('What is your first name? ');
console.log('Hello! My name is Betty. Help me get to know you!\n');


//var rl = require('readline-sync');
//
//var exitConversation = "Alright then. I am glad to have met you. May your winters be mild, and your harvests plentiful! Good Day to you!";
//
//console.log('Greetings young adventurer! Your reputation preceeds you, but alas, my memory is fading, ...');
//
//var userName = ask.question("What do they call you in the legends again? Silent sword? Dragonsbane? Kvoth the bloodless? \n");
//
//console.log("Ahhh, Yes! The Great " + userName + "!!! It's all coming back to me now! Your adventures are well know to us in these lands. It is an honor to have you pass this way... Welcome! " + userName + ". \n");
//
//startGame();
//
//
//function startGame(answer1) {
//    var answer1 = rl.question("As you are new here, may I be of any assistance? [ press [y] for yes, [n] for no ]: \n");
//    if (answer1 = "n") {
//        console.log(exitConversation);
//    } else if (answer1 = "y") {
//        conversationStartAdventure();
//    } else(console.log("My apologiez your grace..."));
//}
//

//function conversationStartAdventure(answer) {
//    console.log("[ Enter [i] for directions to the inn, [t] for directions to the tavern, or [p] if you are just passing through ]")
//    var exitConversation = "Alright then. I am glad to have met you. May your winters be mild, and your harvests plentiful! Good Day to you!";
//    var innConversation = "Dancing Willow Inn. Raif the innkeeper is a person friend of mine. He has clean rooms and keeps and a famous hot mead cidar. Got the recipe from some of his deep forest friends."
//    var tavernConversation = "I would steer you clear of any of the local taverns along the canal. Rather, I would suggest the" + innConversation;
//    var answer1 = ask.question("How may I be of assistance?")
//
//    console.log("[ Enter [i] for directions to the inn, [t] for directions to the tavern, or [p] if you are just passing through ]")


//    function entryConversation() {
//
//        if (answer1 = "i") {
//            console.log("Just passing through eh? Well..." + exitConversation);
//        } else if (answer1 = "t") {
//            console.log("")
//        } else(answer1 = "i")
//        console.log("I'm sorry, I don't think I understand");
//        entryConversation();
//    }
//}


//            
//            You know, it's strange how these things work out...We've had some strange things going on lately,...things that call for a Your reputation preceeds you, but alas, my memory, is fading, ...[press enter to continue]\n');





//rl.question(query, callback)
var firstName = ask.question('What is your first name? ');
console.log('Hello! My name is Betty. Help me get to know you!\n');