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

/** Sets the specified Temperature Function of argv */ 		
var getTemp = function() {

	if (argv.temp == 'steady') {
		return temp.steady();
	} else if (argv.temp == 'critical') {
		return temp.critical();
	} else if (argv.temp == 'normaldistribution') {
		return temp.normaldistribution();
	} else if (argv.temp == 'common') {
		return temp.common();
	}
	return temp.common();
}

/**
 * HTTP Server
 * Response Temperature Data
 */
http.createServer(function(req, res) {
    console.log(req.method + " " + req.url + ' HTTP/' + req.httpVersion);
    res.writeHead('200', {'Content-Type': 'text/plain'});
   	res.end(getTemp());
}).listen(argv.port, argv.ip);

console.log('Server started at http://' + argv.ip + ':' + argv.port + '/');

