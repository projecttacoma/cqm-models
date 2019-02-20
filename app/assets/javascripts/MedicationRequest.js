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

const MedicationRequestSchema = DataElementSchema({
  identifier: Any,
  status: Any,
  statusReason: Any,
  intent: Any,
  category: Any,
  priority: Any,
  doNotPerform: Any,
  reported: Any,
  medication: Any,
  subject: Any,
  encounter: Any,
  supportingInformation: Any,
  authoredOn: Any,
  requester: Any,
  performer: Any,
  performerType: Any,
  recorder: Any,
  reasonCode: Any,
  reasonReference: Any,
  instantiatesCanonical: Any,
  instantiatesUri: Any,
  basedOn: Any,
  groupIdentifier: Any,
  courseOfTherapyType: Any,
  insurance: Any,
  note: Any,
  dosageInstruction: Any,
  dispenseRequest: Any,
  substitution: Any,
  priorPrescription: Any,
  detectedIssue: Any,
  eventHistory: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'MedicationRequest' },

});

module.exports.MedicationRequestSchema = MedicationRequestSchema;
module.exports.MedicationRequest = mongoose.model('MedicationRequest', MedicationRequestSchema);
