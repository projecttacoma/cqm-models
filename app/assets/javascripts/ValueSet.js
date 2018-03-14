const mongoose = require('mongoose');

const [Array, String, Mixed, ObjectId] = [
  mongoose.Schema.Types.Array,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Mixed,
  mongoose.Schema.Types.ObjectId,
];

const ValueSetSchema = mongoose.Schema(
  {
    oid: String,
    display_name: String,
    version: String,
    categories: Mixed,

    concepts: [Mixed],

    user: { type: ObjectId, ref: 'User', index: true }, // Bonnie-specific
    bundle: { type: ObjectId, ref: 'Bundle' }, // Cypress-specific
    measures: [{ type: ObjectId, ref: 'Measure' }],
  },
  // Options
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  },
);

module.exports.ValueSetSchema = ValueSetSchema;
module.exports.ValueSet = mongoose.model('value_set', ValueSetSchema);
