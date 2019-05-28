const mongoose = require('mongoose/browser');

const [Number, String, Mixed, ObjectId] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Mixed,
  mongoose.Schema.Types.ObjectId,
];

const IndividualResultSchema = mongoose.Schema(
  {
    // Population Attributes
    STRAT: Number,
    IPP: Number,
    DENOM: Number,
    NUMER: Number,
    NUMEX: Number,
    DENEX: Number,
    DENEXCEP: Number,
    MSRPOPL: Number,
    OBSERV: Number,
    MSRPOPLEX: Number,

    // Result Attributes
    clause_results: [],
    statement_results: [],
    episode_results: Mixed,

    // This field is for application specific information only. If both Bonnie and
    // Cypress use a common field, it should be made a field on this model,
    // and not put into extendedData.
    extendedData: {
      type: Mixed,
      default: {},
    },

    // Calculation State attributes
    state: {
      type: String,
      enum: ['queued', 'running', 'complete', 'cancelled', 'failed'],
      default: 'queued',
    },

    // Relations to other model classes
    // 'alias' field makes it so you can call obj.measure, and get the object referenced by measure_id
    measure_id: { type: ObjectId, ref: 'Measure', alias: 'measure' },
    patient_id: { type: ObjectId, ref: 'Patient', alias: 'patient' },

  },
  // Options
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }, // These are the Mongoid conventions for timestamps
  }
);

IndividualResultSchema.methods.clause_results_by_clause = function clause_results_by_clause(){
  clause_results_hash = {}
  this.clause_results.forEach(function (result) {
    if(!clause_results_hash[result.libraryName]) {
      clause_results_hash[result.libraryName] = {}
    }
    clause_results_hash[result.libraryName][result.localId] = result
  });
  return clause_results_hash;
};

IndividualResultSchema.methods.statement_results_by_statement = function clause_results_by_clause(){
  statement_results_hash = {}
  this.statement_results.forEach(function (result) {
    if(!statement_results_hash[result.libraryName]) {
      statement_results_hash[result.libraryName] = {}
    }
    statement_results_hash[result.libraryName][result.statementName] = result
  });
  return statement_results_hash;
};

module.exports.IndividualResultSchema = IndividualResultSchema;
class IndividualResult extends mongoose.Document {
  constructor(object) {
    super(object, IndividualResultSchema);
  }
}
module.exports.IndividualResult = IndividualResult;