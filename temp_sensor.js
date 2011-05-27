/**
 * temp_sensor.js
 * 
 * @author: Matthias Schmid
 * @date: 26.05.2011
 * 
 * Returns random integers from 15 to 20 as a String
 */


/* Require Lib Optimist */
var argv = require('optimist').argv;

/* Require Lib Http */
var http = require('http');

/* Require Temperature Utils */
require("./temperature.js")	;
var temp = new Temperature();

/*
 * HTTP Server
 * Response Temperature Data
 */
http.createServer(function(req, res) {
    console.log(req.method + " " + req.url + ' HTTP/' + req.httpVersion);
    res.writeHead('200', {'Content-Type': 'text/plain'});
   	res.end(temp.steady());
}).listen(argv.port, argv.ip);

console.log('Server started at http://' + argv.ip + ':' + argv.port + '/');

