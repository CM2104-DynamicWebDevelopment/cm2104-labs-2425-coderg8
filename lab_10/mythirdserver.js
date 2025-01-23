var http = require('http');
var knockknock = require('knock-knock-jokes');
http.createServer(function (req, res) {
    var randomJoke = knockknock()
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(randomJoke);
}).listen(8080);



