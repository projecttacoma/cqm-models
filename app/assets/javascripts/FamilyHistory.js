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

const FamilyHistorySchema = DataElementSchema({
  authorDatetime: DateTime,
  relationship: Code,
  hqmfOid: { type: String, default: '2.16.840.1.113883.10.20.28.3.111' },
  qrdaOid: { type: String, default: '2.16.840.1.113883.10.20.24.3.12' },
  category: { type: String, default: 'family_history' },
  qdmVersion: { type: String, default: '5.4' },
  _type: { type: String, default: 'FamilyHistory' },

});

module.exports.FamilyHistorySchema = FamilyHistorySchema;
module.exports.FamilyHistory = mongoose.model('FamilyHistory', FamilyHistorySchema);
