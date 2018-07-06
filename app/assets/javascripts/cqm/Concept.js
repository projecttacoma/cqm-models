const mongoose = require('mongoose');

const ConceptSchema = new mongoose.Schema({
  code: String,
  code_system_oid: String,
  code_system_name: String,
  code_system_version: String,
  display_name: String
});

module.exports.ConceptSchema = ConceptSchema;
module.exports.Concept = mongoose.model('concept', ConceptSchema);
