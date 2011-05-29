/**
 * time_sensor.js
 *
 * @author Matthias Schmid
 * @date 07.04.2011
 * Returns the current UTC time as LONG
 */

var argv = require('optimist').argv;
var http = require('http');

var time = function() {
	var now = new Date();
	var utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    return utc.toString();
}

if (argv.port == null || argv.port == 'undefined' || argv.ip == null 
		|| argv.ip == 'undefined') {
	
	console.log("\nTIME SENSOR ERROR:\n" +
			"Start Sensor with: node sensor_time.js " +
			"--ip <ip address> --port <port number>\n");
	return;
}

http.createServer(function(req, res) {
    console.log(req.method + " " + req.url + ' HTTP/' + req.httpVersion + ' at ' 
    		+ (new Date()));
    
    res.writeHead('200', {'Content-Type': 'text/plain'});
    res.end(time());
}).listen(argv.port, argv.ip);
console.log('Server started at http://' + argv.ip + ':' + argv.port + '/');

