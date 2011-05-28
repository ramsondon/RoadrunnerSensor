#!/bin/sh

# @author: Matthias Schmid
# @date: 26.05.2011

#start node temp sensor

# Host Address
ip='172.16.102.224'
ip_debug='127.0.0.1'

# Host Ports
port_a='10001'
port_b='10002'
port_c='10003'
port_d='10004'

# Sensor Simulation function definitions
temp_steady='steady'
temp_common='common'
temp_critical='critical'

server='/usr/share/roadrunner/temp_sensor.js'

# start node
node $server --ip $ip_debug --port $port_a --temp $temp_steady --value 15
#node $server --ip $ip --port $port_a --temp $temp_steady --value 15 
#node $server --ip $ip --port $port_b --temp $temp_critical --value 15 
#node $server --ip $ip --port $port_c --temp $temp_common --value 15 

