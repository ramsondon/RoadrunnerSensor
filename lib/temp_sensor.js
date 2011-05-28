/**
 * temp_sensor.js
 * 
 * @author: Matthias Schmid
 * @date: 26.05.2011
 * 
 * Returns random integers from 15 to 20 as a String
 *
 * Execute: 
 * 		node temp_sensor.js --ip 172.16.102.224 --port 10001 
 *			--temp function --value integer
 * Temp functions:
 * - steady
 * - critical
 * - common
 */

/** Required Modules */
require("./temperature.js")	;
var argv = require('optimist').argv;
var http = require('http');

/** Temperature Simulator */
var temp = new Temperature(argv.value);

/** Default Temperature Simulation Method */
var temp_func = temp.common;

/** Sets the specified Temperature Function of argv */ 		
var setTemp = function() {

	if (argv.temp == 'steady') {
		temp_func = temp.steady;
	} else if (argv.temp == 'critical') {
		temp_func = temp.critical;
	} else if (argv.temp == 'common') {
		temp_func = temp.common;
	}
}
setTemp();

/**
 * HTTP Server
 * Response Temperature Data
 */
http.createServer(function(req, res) {
    console.log(req.method + " " + req.url + ' HTTP/' + req.httpVersion);
    res.writeHead('200', {'Content-Type': 'text/plain'});
   	res.end(temp_func());
}).listen(argv.port, argv.ip);

console.log('Server started at http://' + argv.ip + ':' + argv.port + '/');

