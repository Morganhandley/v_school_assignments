var names = ["Anna", "Bill", "Charlay", "Dexter", "Emily", "Frank", "George", "Hal", "Isaac", "Jill"];

function attemptCall(names, dontCall, call, sendText) {


    for (var i = 0; i < names.length; i++) {
        if (names[i].length % 2 !== 0) {
            call();
        }
        else if (names[i].length % 2 === 0) {
            dontCall();
        }
        else if (names[i].length) {

        } else console.log('not even');
    }
}


function dontCall() {
    console.log("you did not call");
}

function call() {
    console.log(`you called {names[i]}`);
}

// function sendText(name) {
//     console.log(`you sent a text to ${name}`);
// }
// //
// // attemptCall(names, dontCall, call, sendText );
//
//
// function nameSorter(name) {
//     var currentLetter = "";
//     for (var i = 0; i < name.length; i++) {
//         if (currentLetter === name[i]) {
//             sendText(name);
//         }
//         else {
//             currentLetter = name[i];
//         }
//     }
// }
//
// nameSorter('morgaan');