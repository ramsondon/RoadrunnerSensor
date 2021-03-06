#!/bin/sh

cd $(dirname $0)

# initialization
if [ "$1" = "--reinstall" ]; then
	rm -rf vendor
fi

mkdir vendor
cd vendor

# install node
git clone https://github.com/joyent/node.git
cd node
sudo ./configure --without-ssl
sudo make
sudo make install
cd ..

# install npm
git clone https://github.com/isaacs/npm.git
cd npm
sudo make install
cd ..

# install optimist
npm install optimist
mv node_modules/ lib/

