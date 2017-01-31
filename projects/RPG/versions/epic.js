var readLine = require('readline-sync');


var name = readLine.question('What is your first name?\n');

readLine.question("Hello " + name + " please enter [w] to walk:         ( or [q] to quit)\n", {limit:["w", "W"]});

