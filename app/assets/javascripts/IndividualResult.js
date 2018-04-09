const mongoose = require('mongoose');

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
    clause_results: Mixed,
    episode_results: Mixed,
    population_relevance: Mixed,
    statement_relevance: Mixed,
    statement_results: Mixed,

    // Calculation State attributes
    state: String,

    // Relations to other model classes
    measure: { type: ObjectId, ref: 'Measure' },
    patient: { type: ObjectId, ref: 'Patient' },

  },
  // Options
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }, // These are the Mongoid conventions for timestamps
  }
);

module.exports.IndividualResultSchema = IndividualResultSchema;
module.exports.IndividualResult = mongoose.model('individual_result', IndividualResultSchema);
