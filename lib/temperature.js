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
	this.temp = parseFloat(t_value);
	this.state_critical = 0;
}

/** Cos depending on system time */
Temperature.prototype.steady = function() {	
	var t = this.temp + Math.cos((new Date().getTime()));
	return t.toString();
}

/** Critical Temperature Rise and Fall */
Temperature.prototype.critical = function() {
	var t = 0; 
	console.log(this.state_critical);
	if (this.state_critical < 5) {
		t = this.steady();
	} else if (this.state_critical < 15) {
		t = this.normaldistribution();
	} else if (this.state_critical < 20) {
		t = parseFloat(this.normaldistribution()) + 8;
	} else if (this.state_critical < 25) {
		t = this.common();
	}
	if (this.state_critical >= 25) {
		this.state_critical = 0;
		t = this.critical();
	}
	this.state_critical++;
	return t.toString();
}

/** Random number */
Temperature.prototype.common = function() {
	var t = this.temp + Math.random();
	return t.toString();	
}

/** Central Limit Theorem Normal Distribution */
Temperature.prototype.normaldistribution = function() {
	var sum = 0;	
	for (i=0; i < 12; i++) {
		sum += Math.random();
	}
	var t = this.temp + sum - 6	
	return t.toString();
}

/* export class Temperature */
exports.Temperature = Temperature;


