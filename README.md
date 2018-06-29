[![Build Status](https://travis-ci.org/projecttacoma/cqm-models.svg?branch=master)](https://travis-ci.org/projecttacoma/cqm-models)
[![Gem Version](https://badge.fury.io/rb/cqm-models.svg)](https://badge.fury.io/rb/cqm-models)
![NPM](https://img.shields.io/npm/v/cqm-models.svg)

# cqm-models

## QDM Models

This library contains auto generated Mongoid (Ruby) and Mongoose (JavaScript) models that correspond to the QDM (Quality Data Model) specification.

## QDM Model Generator Script (lib/generate_models.rb)

The QDM model generator script can be used to create/update the Mongoid (Ruby) and Mongoose (JavaScript) based models.

See the top of the `lib/generate_models.rb` script for RubyGem requirements.

To use, execute the following:
```
ruby lib/generate_models.rb modelinfo/qdm-modelinfo-5.3.xml data/oids.json
```

The first parameter is the file path to the modelinfo file you wish to generate from. The second parameter is the OID map file. You must include both.

The generator will parse the specified modelinfo file, generate the corresponding models, and place them in:

Ruby: `app/models/qdm/`

JavaScript: `app/assets/javascripts/`

The JavaScript models as-is are intended to be used server side under something like node.js. A browserified version that can be used client side is included as `dist/index.js`.
