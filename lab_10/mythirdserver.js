var http = require('http');
var knockknock = require('knock-knock-jokes');
var currentdate = require('./mymodule');
http.createServer(function (req, res) {
 res.writeHead(200, {'Content-Type': 'text/html'});
 res.write("The date and time are currently: " + currentdate.myDateTime());
 res.end('Hello World!');
 var randomJoke = knockknock()
 res.end(randomJoke);
}).listen(8080);