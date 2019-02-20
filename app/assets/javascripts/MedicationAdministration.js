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

const MedicationAdministrationSchema = DataElementSchema({
  identifier: Any,
  instantiates: Any,
  partOf: Any,
  status: Any,
  statusReason: Any,
  category: Any,
  medication: Any,
  subject: Any,
  context: Any,
  supportingInformation: Any,
  effective: Any,
  performer: Any,
  reasonCode: Any,
  reasonReference: Any,
  request: Any,
  device: Any,
  note: Any,
  dosage: Any,
  eventHistory: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'MedicationAdministration' },

});

module.exports.MedicationAdministrationSchema = MedicationAdministrationSchema;
module.exports.MedicationAdministration = mongoose.model('MedicationAdministration', MedicationAdministrationSchema);
