const mongoose = require('mongoose');
const Concept = require('./Concept.js');

const [mString, Mixed, ObjectId] = [
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Mixed,
  mongoose.Schema.Types.ObjectId,
];

const ValueSetSchema = mongoose.Schema(
  {
    oid: String,
    display_name: String,
    version: String,

    concepts: [Concept.ConceptSchema],

    measures: [{ type: ObjectId, ref: 'Measure', index: true }],
  },
  // Options
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  }
);

module.exports.ValueSetSchema = ValueSetSchema;
module.exports.ValueSet = mongoose.model('value_set', ValueSetSchema);
