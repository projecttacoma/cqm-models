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
    statement_results: Mixed,

    // This field is for application specific information only. If both Bonnie and
    // Cypress use a common field, it should be made a field on this model,
    // and not put into extendedData.
    extendedData: {},

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

module.exports.IndividualResultSchema = IndividualResultSchema;
module.exports.IndividualResult = mongoose.model('individual_result', IndividualResultSchema);
