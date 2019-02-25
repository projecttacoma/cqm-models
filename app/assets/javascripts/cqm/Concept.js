const mongoose = require('mongoose/browser');

const ConceptSchema = new mongoose.Schema({
  code: String,
  code_system_oid: String,
  code_system_name: String,
  code_system_version: String,
  display_name: String,
});

module.exports.ConceptSchema = ConceptSchema;
class Concept extends mongoose.Document {
  constructor(object) {
    super(object, ConceptSchema);
  }
}
module.exports.Concept = Concept;
