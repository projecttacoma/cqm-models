#!/bin/bash

yes | ruby lib/generate_models.rb modelinfo/qdm-modelinfo-5.5.xml data/oids_qdm_5.5.json

if git diff --quiet HEAD --; then
  echo "Generator script produces no differences."
  exit 0
else
  echo "Differences found when running generator script!  Make sure there are no
  unstaged or untracked files."
  exit 1
fi
