#!/bin/bash

# instal node modules
npm install


# install selenium server jar
# build file reference
host="http://selenium-release.storage.googleapis.com/2.47/"
file="selenium-server-standalone-2.47.0.jar"

# download if not already downloaded
if [ ! -f $file ]; then
    curl -O $host$file
fi

# start up server
java -jar $file
