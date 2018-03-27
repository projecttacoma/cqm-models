const mongoose = require('mongoose');

const mString = mongoose.Schema.Types.String;

const ConceptSchema = mongoose.Schema({
  code: mString,
  code_system: mString,
  code_system_name: mString,
  code_system_version: mString,
  display_name: mString,
});

module.exports.ConceptSchema = ConceptSchema;
module.exports.Concept = mongoose.model('concept', ConceptSchema);
