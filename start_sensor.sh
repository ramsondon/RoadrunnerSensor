#!/bin/bash

# @author: Matthias Schmid
# @date: 26.05.2011

#start node temp sensor


# Starts a new Screen and the Sensor Simulation Server inside
# arg_1 = Simulation Server
# arg_2 = Server IP
# arg_3 = Server Port
# arg_4 = Temperature Function
# arg_5 = Initial Temperature Value
connect()
{
	node=node
	echo "${node} ${1} --ip ${2} --port ${3} --temp ${4} --value ${5}"
	#screen -d -r 
	${node} ${1} --ip ${2} --port ${3} --temp ${4} --value ${5} &
}

# Host Address
#ip='172.16.102.224'
#ip_debug='127.0.0.1'
if [ "$1" = '--debug' ]; then
	ip='127.0.0.1'
else
	ip='172.16.102.224'
fi

# Sensor Simulation function definitions
sensor=('steady' 'critical' 'common')

# Number of Sensors
len=${#sensor[@]}
server='/usr/share/roadrunner/temp_sensor.js'
value=15

# start all sensors
for ((i=0 ; i<${len}; i++));
do
	echo connecting to ${server}
	connect ${server} ${ip} 1000${i} ${sensor[$i]} ${value}
done
