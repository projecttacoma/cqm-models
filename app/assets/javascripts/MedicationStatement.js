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

const MedicationStatementSchema = DataElementSchema({
  identifier: Any,
  basedOn: Any,
  partOf: Any,
  status: Any,
  statusReason: Any,
  category: Any,
  medication: Any,
  subject: Any,
  context: Any,
  effective: Any,
  dateAsserted: Any,
  informationSource: Any,
  derivedFrom: Any,
  reasonCode: Any,
  reasonReference: Any,
  note: Any,
  dosage: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'MedicationStatement' },

});

module.exports.MedicationStatementSchema = MedicationStatementSchema;
module.exports.MedicationStatement = mongoose.model('MedicationStatement', MedicationStatementSchema);
