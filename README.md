[![Build Status](https://travis-ci.com/projecttacoma/cqm-models.svg?branch=master)](https://travis-ci.com/projecttacoma/cqm-models)
[![codecov](https://codecov.io/gh/projecttacoma/cqm-models/branch/master/graph/badge.svg)](https://codecov.io/gh/projecttacoma/cqm-models)
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
ruby lib/generate_models.rb modelinfo/qdm-modelinfo-5.4.xml data/oids.json
```

The first parameter is the file path to the modelinfo file you wish to generate from. The second parameter is the OID map file. You must include both.

The generator will parse the specified modelinfo file, generate the corresponding models, and place them in:

Ruby: `app/models/qdm/`

JavaScript: `app/assets/javascripts/`

The JavaScript models as-is are intended to be used server side under something like node.js. A browserified version that can be used client side is included as `dist/index.js`.

## Running the tests

### To run frontend Jasmine tests 

```
yarn test
```

### To run backend Ruby tests

```
bundle exec rake
```


## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see [tags on this repository](https://github.com/projecttacoma/cqm-models/tags). 


## License

Copyright 2018 The MITRE Corporation

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

```
http://www.apache.org/licenses/LICENSE-2.0
```

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
