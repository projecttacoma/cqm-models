#!/bin/bash

# If cql-execution/lib does not exist, build it from src.
# This is needed if pointing to a cql-execution branch, as only the coffeescript
# is included in the ./node_modules directory.
if [ ! -d "./node_modules/cql-execution/lib" ]; then
  yarn build-cql
fi
