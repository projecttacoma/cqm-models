const mongoose = require('mongoose');
const Code = require('./basetypes/Code');
const Interval = require('./basetypes/Interval');
const Quantity = require('./basetypes/Quantity');

const [Integer, Array, String, Boolean, Mixed, ObjectId, Date] = [
  mongoose.Schema.Types.Integer,
  mongoose.Schema.Types.Array,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
  mongoose.Schema.Types.Mixed,
  mongoose.Schema.Types.ObjectId,
  mongoose.Schema.Types.Date,
];

const MeasureSchema = mongoose.Schema(
  {
    id: String,
    measure_id: String,
    hqmf_id: String,
    hqmf_set_id: String,
    hqmf_version_number: Integer,
    cms_id: String,
    title: String,
    description: String,
    type: String,
    category: { type: String, default: 'Uncategorized' },

    episode_of_care: Boolean,
    continuous_constiable: Boolean,
    episode_ids: [], // not sure if this is necessary

    needs_finalize: Boolean, // Bonnie-specific?

    published: Boolean,
    publish_date: Date,
    version: Integer,

    elm_annotations: Mixed,

    cql: [String],
    elm: [Mixed],
    main_cql_library: String,
    cql_statement_dependencies: Mixed,

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
