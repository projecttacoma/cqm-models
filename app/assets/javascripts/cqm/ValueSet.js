const mongoose = require('mongoose');
const Concept = require('./Concept.js');

const [String] = [mongoose.Schema.Types.String];

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
