const mongoose = require('mongoose');
const { DataElementSchema } = require('./basetypes/DataElement');
const Code = require('./basetypes/Code');
const Interval = require('./basetypes/Interval');
const Quantity = require('./basetypes/Quantity');
const DateTime = require('./basetypes/DateTime');
const { ComponentSchema } = require('./Component');
const { FacilityLocationSchema } = require('./FacilityLocation');
const Any = require('./basetypes/Any');

const [Number, String, Mixed] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Mixed,
];

const LaboratoryTestPerformedSchema = DataElementSchema({
  authorDatetime: DateTime,
  relevantPeriod: Interval,
  status: Mixed,
  method: Mixed,
  result: Any,
  resultDatetime: DateTime,
  reason: Mixed,
  referenceRange: Interval,
  negationRationale: Mixed,
  components: [ComponentSchema],
  hqmfOid: { type: String, default: '2.16.840.1.113883.10.20.28.3.42' },
  category: { type: String, default: 'laboratory_test' },
  qdmStatus: { type: String, default: 'performed' },
  qdmVersion: { type: String, default: '5.3' },
  _type: { type: String, default: 'LaboratoryTestPerformed' },

});

module.exports.LaboratoryTestPerformedSchema = LaboratoryTestPerformedSchema;
module.exports.LaboratoryTestPerformed = mongoose.model('LaboratoryTestPerformed', LaboratoryTestPerformedSchema);
