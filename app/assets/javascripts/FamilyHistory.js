const mongoose = require('mongoose/browser');

const { IdentifierSchema } = require('./Identifier');
const { DataElementSchema } = require('./basetypes/DataElement');
const Code = require('./basetypes/Code');
const Interval = require('./basetypes/Interval');
const Quantity = require('./basetypes/Quantity');
const DateTime = require('./basetypes/DateTime');
const Date = require('./basetypes/Date');
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
  recorder: Any,
  qdmTitle: { type: String, default: 'Family History' },
  hqmfOid: { type: String, default: '2.16.840.1.113883.10.20.28.4.111' },
  qrdaOid: { type: String, default: '2.16.840.1.113883.10.20.24.3.12' },
  qdmCategory: { type: String, default: 'family_history' },
  qdmVersion: { type: String, default: '5.5' },
  _type: { type: String, default: 'QDM::FamilyHistory' },

});

module.exports.FamilyHistorySchema = FamilyHistorySchema;
class FamilyHistory extends mongoose.Document {
  constructor(object) {
    super(object, FamilyHistorySchema);
    this._type = 'QDM::FamilyHistory';
  }
}

module.exports.FamilyHistory = FamilyHistory;

