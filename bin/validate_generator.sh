#!/bin/bash

yes | ruby lib/generate_models.rb modelinfo/qdm-modelinfo-5.4.xml data/oids.json

if git diff-index --quiet HEAD --; then
  echo "Generator script produces no differences."
  exit 0
else
  echo "Differences found when running generator script!  Make sure there are no
  unstaged or untracked files."
  exit 1
fi
