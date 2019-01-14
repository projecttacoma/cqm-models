const mongoose = require('mongoose');
const Concept = require('./Concept.js');

const [String, Mixed, ObjectId] = [
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Mixed,
  mongoose.Schema.Types.ObjectId,
];

const ValueSetSchema = new mongoose.Schema(
  {
    oid: String,
    display_name: String,
    version: String,

    concepts: [Concept.ConceptSchema],
  },
  // Options
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  }
);

module.exports.ValueSetSchema = ValueSetSchema;
module.exports.ValueSet = mongoose.model('value_set', ValueSetSchema);
