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

const FamilyMemberHistorySchema = DataElementSchema({
  identifier: Any,
  instantiatesCanonical: Any,
  instantiatesUri: Any,
  status: Any,
  dataAbsentReason: Any,
  patient: Any,
  date: Any,
  name: Any,
  relationship: Any,
  sex: Any,
  born: Any,
  age: Any,
  estimatedAge: Any,
  deceased: Any,
  reasonCode: Any,
  reasonReference: Any,
  note: Any,
  condition: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'FamilyMemberHistory' },

});

module.exports.FamilyMemberHistorySchema = FamilyMemberHistorySchema;
module.exports.FamilyMemberHistory = mongoose.model('FamilyMemberHistory', FamilyMemberHistorySchema);
