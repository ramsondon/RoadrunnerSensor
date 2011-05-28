The Roadrunner Sensor Project
=============================

This Project is the Sensor Simulation Environment for the RoadrunnerAndroid and the RoadrunnerClient Project.


Requirements
------------

It is possible to run the `install_components.sh` to install all the required dependencies. But pay attention on already installed components via apt-get.

	* nodejs
	* optimist plugin for nodejs
	* npm

Install
-------

1. Run `install_sensors.sh` from shell. Parameter `--autostart` for installing `start_sensors.sh` to `/etc/init.d/`
2. Run `start_sensors.sh` to start Sensors on Local Ports `[10000, 10001, 10002, 10003, 10004]`

Sensors
-------

Every Sensor works with a specific Temperature measuring function. The initial value 15°C is common to all sensors and is added to the measuring results.
	
	1. `steady`: cos depending on system time (port 10000)
	2. `critical`: a mixed algorithm using the steady, common and normaldistribution measuring depending on its state (25 samples) (port 10001)
	3. `normaldistribution`: normal distributed measuring with central limit theorem normal distribution (port 10002)
	4. `common`: javascript random number of the Math lib (10003)
