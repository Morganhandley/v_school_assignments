var http = require('http');

var server = http.createServer(function(request, response) {
    console.log(`Fourth time's a charm! I can't beleive we are actually getting requests!`);
    response.write(`you did it, you really did it!`);
    response.end();
});

server.listen(3000);