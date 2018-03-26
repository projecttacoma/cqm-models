const mongoose = require('mongoose');
const Code = require('./basetypes/Code');
const Interval = require('./basetypes/Interval');
const Quantity = require('./basetypes/Quantity');

const [Number, Array, String, Boolean, Mixed, ObjectId, Date] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.Array,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
  mongoose.Schema.Types.Mixed,
  mongoose.Schema.Types.ObjectId,
  mongoose.Schema.Types.Date,
];

const MeasureSchema = mongoose.Schema(
  {
    // ID/other measure information
    id: String,
    measure_id: String,
    hqmf_id: String,
    hqmf_set_id: String,
    hqmf_version_number: Number,
    cms_id: String,
    title: String,
    description: String,
    type: String,
    category: { type: String, default: 'Uncategorized' },

    // Measure type variables
    episode_of_care: Boolean,
    continuous_constiable: Boolean,
    episode_ids: [],

    // Publishing data (used by Bonnie)
    published: Boolean,
    publish_date: Date,
    version: Number,

    // ELM/CQL Measure-logic related data
    elm_annotations: Mixed,
    cql: [String],
    elm: [Mixed],
    main_cql_library: String,
    cql_statement_dependencies: Mixed,

    // HQMF/Tacoma-specific Measure-logic related data
    population_criteria: Mixed,
    data_criteria: Mixed,
    source_data_criteria: Mixed,
    measure_period: Interval,
    measure_attributes: [],
    populations: [Mixed],
    populations_cql_map: Mixed,
    observations: [Mixed],

    value_sets: [{ type: ObjectId, ref: 'ValueSet' }],

    complexity: Mixed, // Bonnie-specific?

    // Relations to other model classes
    user: { type: ObjectId, ref: 'User', index: true }, // Bonnie-specific
    bundle: { type: ObjectId, ref: 'Bundle' }, // Cypress-specific, but used in Bonnie-bundler as well
    package: { type: ObjectId, ref: 'MeasurePackage' }, // Bonnie specific
  },
  // Options
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }, // These are the Mongoid conventions for timestamps
  },
);

module.exports.MeasureSchema = MeasureSchema;
module.exports.Measure = mongoose.model('measure', MeasureSchema);
