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
 * 
 */
Temperature = function(t_value) {
	this.value = t_value;
	this.temp = this.value + Math.floor(Math.random()*5);
}

Temperature.prototype.steady = function() {
	this.temp = this.temp + Math.cos(Math.round(new Date().getTime()/1000.0));
	return this.temp.toString();
}

Temperature.prototype.critical = function() {
	return Math.random().toString();
}

Temperature.prototype.common = function() {
	return Math.random().toString();	
}

/* export class Temperature */
exports.Temperature = Temperature;


