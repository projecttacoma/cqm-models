const mongoose = require('mongoose');
const Concept = require('./Concept.js');

const [mString, Mixed, ObjectId] = [
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Mixed,
  mongoose.Schema.Types.ObjectId,
];

const ValueSetSchema = mongoose.Schema(
  {
    oid: mString,
    display_name: mString,
    version: mString,
    categories: Mixed,

    concepts: [Concept.ConceptSchema],

    user: { type: ObjectId, ref: 'User', index: true }, // Bonnie-specific
    bundle: { type: ObjectId, ref: 'Bundle' }, // Cypress-specific
    measures: [{ type: ObjectId, ref: 'Measure' }],
  },
  // Options
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  }
);

module.exports.ValueSetSchema = ValueSetSchema;
module.exports.ValueSet = mongoose.model('value_set', ValueSetSchema);
