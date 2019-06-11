const mongoose = require('mongoose/browser');
const Code = require('../basetypes/Code');
const Interval = require('../basetypes/Interval');
const Quantity = require('../basetypes/Quantity');
const DataElementSchema = require('../basetypes/DataElement').DataElementSchema();
const AllDataElements = require('../AllDataElements');
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
    calculate_sdes: Boolean,

    // ELM/CQL Measure-logic related data encapsulated in CQLLibrarySchema
    // Field name changed from 'cql' to 'cql_libraries' because the semantics of
    // embeds_many: cqls (on the Ruby side) sounded weird,
    // and we wanted to keep the API consistent
    cql_libraries: [CQLLibrarySchema],
    main_cql_library: String,

    // HQMF/Tacoma-specific Measure-logic related data
    population_criteria: Mixed,
    source_data_criteria: [],
    measure_period: Mixed,
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

// After initialization of a Measure model, initialize every individual data element
// to its respective Mongoose Model
MeasureSchema.methods.initializeDataElements = function initializeDataElements() {
  let typeStripped;
  const sourceDataCriteriaInit = [];
  this.source_data_criteria.forEach((element) => {
    typeStripped = element._type.replace(/QDM::/, '');
    sourceDataCriteriaInit.push(new AllDataElements[typeStripped](element));
  });
  this.set('source_data_criteria', sourceDataCriteriaInit);
};

MeasureSchema.methods.all_stratifications = function all_stratifications() {
  return this.population_sets.flatMap(ps => ps.stratifications);
};

module.exports.MeasureSchema = MeasureSchema;
class Measure extends mongoose.Document {
  constructor(object) {
    super(object, MeasureSchema);
    this.initializeDataElements();
  }
}
module.exports.Measure = Measure;
