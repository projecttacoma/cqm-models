#!/bin/bash

mkdir -p tmp/dist/

# browser_test browserifies index.js to tmp/dist
yarn run browser_test

# comm -3 only returns lines that differ between the two files. If none are different, diff will be empty
diff=`diff dist/browser.js tmp/dist/browser.js`

# Exit with a non-zero code if the diff isn't empty
if [ "$diff" != "" ]; then
  echo "dist/browser.js is out of date. Please run 'yarn run browser' locally and commit/push the result"
  exit 1
fi

echo "dist/browser.js is up to date"
