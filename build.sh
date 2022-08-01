#!bin/bash

#build the source 
echo "Building the source"
tsc

#copt static files
echo "Copying static files"
cp -r src/font dist/
cp -r src/css dist/
