#!/bin/bash

# Update the system
sudo yum -y update

# Install Ruby and wget
sudo yum -y install ruby
sudo yum -y install wget

# Navigate to the home directory
cd /home/ec2-user

# Download the CodeDeploy installation script
wget https://aws-codedeploy-ap-south-1.s3.ap-south-1.amazonaws.com/latest/install

# Make the install script executable
sudo chmod +x ./install

# Run the install script
sudo ./install auto

# Install Python3 and pip3
sudo yum install -y python3

# Install AWS CLI using pip3
sudo pip3 install awscli

# Verify AWS CLI installation
aws --version
