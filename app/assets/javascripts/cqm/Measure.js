const mongoose = require('mongoose');
const Code = require('../basetypes/Code');
const Interval = require('../basetypes/Interval');
const Quantity = require('../basetypes/Quantity');
const { CQLLibrarySchema } = require('./CQLLibrary');
const { PopulationSetSchema } = require('./PopulationSet');

const [Number, String, Boolean, Mixed, ObjectId, Date] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
  mongoose.Schema.Types.Mixed,
  mongoose.Schema.Types.ObjectId,
  mongoose.Schema.Types.Date,
];

const MeasureSchema = new mongoose.Schema(
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

    // Composite/component measure fields
    composite: {
      type: Boolean,
      default: false,
    },
    component: {
      type: Boolean,
      default: false,
    },
    component_hqmf_set_ids: [String],
    composite_hqmf_set_id: String,

    // Measure type variables
    measure_scoring: {
      type: String,
      enum: ['PROPORTION', 'RATIO', 'CONTINUOUS_VARIABLE', 'COHORT'],
      default: 'PROPORTION',
    },
    calculation_method: {
      type: String,
      enum: ['PATIENT', 'EPISODE_OF_CARE'],
      default: 'PATIENT',
    },

    // ELM/CQL Measure-logic related data encapsulated in CQLLibrarySchema
    // Field name changed from 'cql' to 'cql_libraries' because the semantics of
    // embeds_many: cqls (on the Ruby side) sounded weird,
    // and we wanted to keep the API consistent
    cql_libraries: [CQLLibrarySchema],
    main_cql_library: String,

    // HQMF/Tacoma-specific Measure-logic related data
    population_criteria: Mixed,
    data_criteria: Mixed,
    source_data_criteria: Mixed,
    measure_period: Interval,
    measure_attributes: [],

    population_sets: [PopulationSetSchema],

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