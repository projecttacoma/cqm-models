# cqm-models

### QDM Model Generator Script (lib/generate_models.rb)

The QDM model generator script can be used to create Ruby (mongoid based) and JavaScript (mongoose based) models.

See the top of the script for RubyGem requirements.

To use, run:
```
ruby lib/generate_models.rb modelinfo/qdm-modelinfo-5.3.xml data/oids.json
```

The first parameter is the file path to the modelinfo file you wish to generate from. The second parameter is the OID map file. You must include both.

The generator will parse the model info file, generate the corresponding models, and place them in:

Ruby: `app/models/qdm/`

JavaScript: `app/assets/javascripts/`
