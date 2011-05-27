/**
 * temperature.js
 * 
 * @author: Matthias Schmid
 * @date: 26.05.2011
 * 
 * Contains Temperature Functionalities
 */


/*
 * Class Temperature
 */
Temperature = function() {
	this.init = 15;
	this.temp = 15 + Math.floor(Math.random()*5);
}

Temperature.prototype.steady = function() {
	this.temp = this.temp + (Math.random()-0.5);
	return this.temp.toString();
}

Temperature.prototype.critical = function() {
	return Math.random().toString();
}

/* export class Temperature */
exports.Temperature = Temperature;


