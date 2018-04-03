const mongoose = require('mongoose');
const DataElement = require('./basetypes/DataElement');
const Code = require('./basetypes/Code');
const Interval = require('./basetypes/Interval');
const Quantity = require('./basetypes/Quantity');

const [Number, String, Date] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Date,
];

const FamilyHistorySchema = DataElement.extendSchema(DataElement.DataElementSchema, {
  author_datetime: Date,
  relationship: Code,
  hqmf_oid: { type: String, default: '2.16.840.1.113883.10.20.28.3.111' },
  qrda_oid: { type: String, default: '2.16.840.1.113883.10.20.24.3.12' },
  category: { type: String, default: 'family_history' },
  qdm_version: { type: String, default: '5.3' },
  class_name: { type: String, default: 'FamilyHistory' },

});

module.exports.FamilyHistorySchema = FamilyHistorySchema;
module.exports.FamilyHistory = mongoose.model('FamilyHistory', FamilyHistorySchema);
