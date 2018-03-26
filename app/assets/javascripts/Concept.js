const mongoose = require('mongoose');

const { String } = mongoose.Schema.Types.String;

const ConceptSchema = mongoose.Schema({
  code: String,
  code_system: String,
  code_system_name: String,
  code_system_version: String,
  display_name: String,
});

module.exports.ConceptSchema = ConceptSchema;
module.exports.Concept = mongoose.model('concept', ConceptSchema);
