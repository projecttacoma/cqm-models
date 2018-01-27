# cqm-models

### QDM Model Generator

The QDM model generator (`generate_models.rb`) can be used to create Ruby (mongoid based) and JavaScript (mongoose based) models.

To use, simply run:
```
ruby generate_models.rb qdm-modelinfo-5.0.2.xml
```

The generator will parse the model info file, generate the corresponding models, and place them in:
Ruby: `app/models/`
JavaScript: `app/assets/javascripts/`

