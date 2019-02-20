const mongoose = require('mongoose');
const { DataElementSchema } = require('./basetypes/DataElement');
const Code = require('./basetypes/Code');
const Interval = require('./basetypes/Interval');
const Quantity = require('./basetypes/Quantity');
const DateTime = require('./basetypes/DateTime');
const { ComponentSchema } = require('./Component');
const { FacilityLocationSchema } = require('./FacilityLocation');
const { IdSchema } = require('./Id');
const Any = require('./basetypes/Any');

const [Number, String] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
];

const MedicationDispenseSchema = DataElementSchema({
  identifier: Any,
  partOf: Any,
  status: Any,
  statusReason: Any,
  category: Any,
  medication: Any,
  subject: Any,
  context: Any,
  supportingInformation: Any,
  performer: Any,
  location: Any,
  authorizingPrescription: Any,
  type: Any,
  quantity: Any,
  daysSupply: Any,
  whenPrepared: Any,
  whenHandedOver: Any,
  destination: Any,
  receiver: Any,
  note: Any,
  dosageInstruction: Any,
  substitution: Any,
  detectedIssue: Any,
  eventHistory: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'MedicationDispense' },

});

module.exports.MedicationDispenseSchema = MedicationDispenseSchema;
module.exports.MedicationDispense = mongoose.model('MedicationDispense', MedicationDispenseSchema);
