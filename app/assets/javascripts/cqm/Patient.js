const mongoose = require('mongoose/browser');
const Code = require('../basetypes/Code');
const Interval = require('../basetypes/Interval');
const Quantity = require('../basetypes/Quantity');
const DateTime = require('../basetypes/DateTime');
const { QDMPatientSchema, QDMPatient } = require('../QDMPatient');
const { ProviderSchema } = require('./Provider');

const [Schema, Number, String, Mixed] = [
  mongoose.Schema,
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Mixed,
];

const PatientSchema = new Schema({

  givenNames: [String],
  familyName: String,
  bundleId: String,
  expectedValues: [],
  notes: String,
  qdmPatient: QDMPatientSchema,
  providers: [ProviderSchema],
  measure_ids: [String],

}, { id: false });

module.exports.PatientSchema = PatientSchema;
class Patient extends mongoose.Document {
  constructor(object) {
    super(object, PatientSchema);
    if (this.qdmPatient) {
      this.qdmPatient = new QDMPatient(this.qdmPatient.toJSON());
    }
  }
}
module.exports.Patient = Patient;
