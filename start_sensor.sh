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
connectTemperature()
{
	echo "node ${1} --ip ${2} --port ${3} --temp ${4} --value ${5}"
	node ${1} --ip ${2} --port ${3} --temp ${4} --value ${5} &
}

connectTimeService()
{
	echo "node ${1} --ip ${2} --port ${3}"
	node ${1} --ip ${2} --port ${3}
}
# Host Address
# @param --localhost use Local 
if [ "$1" = '--localhost' ]; then
	ip='127.0.0.1'
else
	ip=`hostname -I`
fi

# Sensor Simulation function definitions
sensor=('steady' 'critical' 'normaldistribution' 'common')

# Number of Sensors
len=${#sensor[@]}
server='/usr/share/roadrunner/temp_sensor.js'
value=15
timeservice='/usr/share/roadrunner/time_sensor.js'
# start all sensors
for ((i=0 ; i<${len}; i++));
do
	connectTemperature ${server} ${ip} 1000${i} ${sensor[$i]} ${value}
done

# start Time Service
connectTimeService ${timeservice} ${ip} 10010
