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
ruby lib/generate_models.rb modelinfo/qdm-modelinfo-5.6.xml data/oids_qdm_5.6.json
```

The first parameter is the file path to the modelinfo file you wish to generate from. The second parameter is the OID map file. You must include both.

The generator will parse the specified modelinfo file, generate the corresponding models, and place them in:

Ruby: `app/models/qdm/`

JavaScript: `app/assets/javascripts/`

The JavaScript models as-is are intended to be used server side under something like node.js. A browserified version that can be used client side is included as `dist/index.js`.

## QDM Patient Generator Script (lib/generate_patients.rb)

The QDM patient generator script can be used to create CQMPatients that have a QDMPatient which contains every data element type specified in the model-info file

To generate a set of patients using the most recent model-info file, each of which has a single data element in addition to the 5 PatientCharactaristic types execute the following:
```
QDM::PatientGeneration.generate_exhaustive_data_element_patients()
```

To generate a single patient that has every data element from a specific model-info file execute the following:
```
QDM::PatientGeneration.generate_exhaustive_data_element_patients(false, 'qdm-modelinfo-5.6.xml')
```

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

Starting with version **2.0.0** released on 6/20/2019, cqm-models versioning has the format **X.Y.Z**, where:

* **X** maps to a version of QDM. See the table below to see the existing mapping to QDM versions.

  | X | QDM version |
  | --- | --- |
  | 2 | 5.4 |
  | 3 | 5.5 |
  | 4 | 5.6 |

* **Y** indicates major changes (incompatible API changes)

* **Z** indicates minor changes (added functionality in a backwards-compatible manner) and patch changes (backwards-compatible bug fixes)

For the versions available, see [tags on this repository](https://github.com/projecttacoma/cqm-models/tags).


## License

Copyright 2018 The MITRE Corporation

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

```
http://www.apache.org/licenses/LICENSE-2.0
```

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
