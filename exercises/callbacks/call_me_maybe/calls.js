var names = ["Anna", "Bill", "Charlay", "Dexter", "Emily", "Frank", "George", "Hal", "Isaac", "Jill"];

function call() {
    console.log("you called");
}


function attemptCall(names, call) {

    for (var i = 0; i < names.length; i++) {
        if (names[i].length % 2 === 0) {
            call();
        } else {
            console.log('not even');
        }
    }
}

attemptCall(names);

