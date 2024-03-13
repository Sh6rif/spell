#!/bin/bash

# Update packages
apt-get update

# Install Python (if not already installed)
apt-get install -y python3 python3-pip

# Install autocorrect module
pip3 install autocorrect

# Install Node.js dependencies
npm install

# Run your application
node node.js
