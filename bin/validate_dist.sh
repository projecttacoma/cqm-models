#!/bin/bash

mkdir -p tmp/dist/

# dist_test browserifies index.js to tmp/dist
yarn run dist_test

# comm -3 only returns lines that differ between the two files. If none are different, diff will be empty
diff=`diff dist/index.js tmp/dist/index.js`

# Exit with a non-zero code if the diff isn't empty
if [ "$diff" != "" ]; then
  echo "$diff"
  exit 1
fi
