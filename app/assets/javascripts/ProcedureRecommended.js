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

const ProcedureRecommendedSchema = DataElementSchema({
  authorDatetime: DateTime,
  reason: Code,
  anatomicalLocationSite: Code,
  rank: Number,
  requester: Any,
  negationRationale: Code,
  qdmTitle: { type: String, default: 'Procedure, Recommended' },
  hqmfOid: { type: String, default: '2.16.840.1.113883.10.20.28.4.68' },
  qdmCategory: { type: String, default: 'procedure' },
  qdmStatus: { type: String, default: 'recommended' },
  qdmVersion: { type: String, default: '5.5' },
  _type: { type: String, default: 'QDM::ProcedureRecommended' },

});

module.exports.ProcedureRecommendedSchema = ProcedureRecommendedSchema;
class ProcedureRecommended extends mongoose.Document {
  constructor(object) {
    super(object, ProcedureRecommendedSchema);
    this._type = 'QDM::ProcedureRecommended';
  }
}

module.exports.ProcedureRecommended = ProcedureRecommended;

