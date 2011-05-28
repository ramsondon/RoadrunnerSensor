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

