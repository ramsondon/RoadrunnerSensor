#!/bin/sh

# @author: Matthias Schmid
# @date: 27.05.2011
#
# installs the sensors and start_sensor.sh to /etc/init.d/ for immediate autostart

# Installation Path
install_path=/usr/share/roadrunner

# Install File Definition
simserver='temp_sensor.js'
simulator='temperature.js'

lib='lib'
mod='node_modules'

# Create Install Path
sudo rm -rf $install_path
sudo mkdir $install_path

# Install Files into Install Path
sudo cp $lib/$simserver $install_path/$simserver
sudo cp $lib/$simulator $install_path/$simulator
if [-d $lib/$mod]; then	
	sudo cp -R $lib/$mod $install_path/$mod
fi
# autostart
if [ "$1" = "--autostart" ]; then	
	rm /etc/init.d/start_sensor.sh
	chmod +x start_sensor.sh
	cp start_sensor.sh /etc/init.d/start_sensor.sh
fi


