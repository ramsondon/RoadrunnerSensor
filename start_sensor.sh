#!/bin/bash

# @author: Matthias Schmid
# @date: 26.05.2011

# Starts node temperature sensors
# Local Ports used: Beginning with 10000
#
# @param --localhost start in local mode


# Starts a new Screen and the Sensor Simulation Server inside
# arg_1 = Simulation Server
# arg_2 = Server IP
# arg_3 = Server Port
# arg_4 = Temperature Function
# arg_5 = Initial Temperature Value
connect()
{
	echo "node ${1} --ip ${2} --port ${3} --temp ${4} --value ${5}"
	node ${1} --ip ${2} --port ${3} --temp ${4} --value ${5} &
}

# Host Address
# @param --debug use Local 
if [ "$1" = '--localhost' ]; then
	ip='127.0.0.1'
else
	ip=hostname -I
fi

# Sensor Simulation function definitions
sensor=('steady' 'critical' 'normaldistribution' 'common')

# Number of Sensors
len=${#sensor[@]}
server='/usr/share/roadrunner/temp_sensor.js'
value=15

# start all sensors
for ((i=0 ; i<${len}; i++));
do
	connect ${server} ${ip} 1000${i} ${sensor[$i]} ${value}
done
