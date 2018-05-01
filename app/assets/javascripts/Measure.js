const mongoose = require('mongoose');
const Code = require('./basetypes/Code');
const Interval = require('./basetypes/Interval');
const Quantity = require('./basetypes/Quantity');

const [mNumber, mString, mBoolean, Mixed, ObjectId, mDate] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
  mongoose.Schema.Types.Mixed,
  mongoose.Schema.Types.ObjectId,
  mongoose.Schema.Types.Date,
];

const MeasureSchema = mongoose.Schema(
  {
    // A version-specific UUID for the measure
    hqmf_id: String,
    // A version-neutral UUID for the measure
    hqmf_set_id: String,
    // A Semantic Version-compliant string (e.g. "2.3.4") for the measure
    hqmf_version_number: String,
    // A CMS-style string (e.g. "CMS2v4") for the measure
    cms_id: String,
    title: String,
    description: String,
    // EP/EH, or "unknown"
    type: String,
    category: { type: String, default: 'Uncategorized' },

    // Measure type variables
    episode_of_care: Boolean,
    continuous_variable: Boolean,

    // ELM/CQL Measure-logic related data
    elm_annotations: Mixed,
    cql: [mString],
    elm: [Mixed],
    main_cql_library: mString,
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
    // TODO: Depending on how we restructure the Measure/Population object, may be deleted in the future
    population_ids: Mixed,

    // Relations to other model classes
    bundle: { type: ObjectId, ref: 'Bundle' }, // Cypress-specific, until we migrate the Bundle into cqm-models
    package: { type: ObjectId, ref: 'MeasurePackage' }, // Bonnie-specific
    patients: [{ type: ObjectId, ref: 'Patient', index: true }],

    value_sets: [{ type: ObjectId, ref: 'ValueSet' }],
  },
  // Options
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }, // These are the Mongoid conventions for timestamps
  }
);

MeasureSchema.virtual('ALL_POPULATION_CODES').get(() => ['STRAT', 'IPP', 'DENOM', 'DENEX', 'NUMER', 'NUMEX', 'DENEXCEP', 'MSRPOPL', 'OBSERV', 'MSRPOPLEX']);

MeasureSchema.virtual('cqlSkipStatements').get(() => ['SDE Ethnicity', 'SDE Payer', 'SDE Race', 'SDE Sex']);

module.exports.MeasureSchema = MeasureSchema;
module.exports.Measure = mongoose.model('measure', MeasureSchema);
