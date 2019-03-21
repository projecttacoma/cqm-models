const mongoose = require('mongoose/browser');

const { IdSchema } = require('./Id');
const { DataElementSchema } = require('./basetypes/DataElement');
const Code = require('./basetypes/Code');
const Interval = require('./basetypes/Interval');
const Quantity = require('./basetypes/Quantity');
const DateTime = require('./basetypes/DateTime');
const Any = require('./basetypes/Any');
const { ComponentSchema } = require('./attributes/Component');
const { FacilityLocationSchema } = require('./attributes/FacilityLocation');


const [Number, String] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
];

const FamilyHistorySchema = DataElementSchema({
  authorDatetime: DateTime,
  relationship: Code,
  hqmfTitle: { type: String, default: 'Family History' },
  hqmfOid: { type: String, default: '2.16.840.1.113883.10.20.28.3.111' },
  qrdaOid: { type: String, default: '2.16.840.1.113883.10.20.24.3.12' },
  qdmCategory: { type: String, default: 'family_history' },
  qdmVersion: { type: String, default: '5.4' },
  _type: { type: String, default: 'FamilyHistory' },

});

module.exports.FamilyHistorySchema = FamilyHistorySchema;
class FamilyHistory extends mongoose.Document {
  constructor(object) {
    super(object, FamilyHistorySchema);
  }
}
module.exports.FamilyHistory = FamilyHistory;
