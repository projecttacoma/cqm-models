const mongoose = require('mongoose/browser');

const { IdentifierSchema } = require('./attributes/Identifier');
const { DataElementSchema } = require('./basetypes/DataElement');
const Code = require('./basetypes/Code');
const Interval = require('./basetypes/Interval');
const Quantity = require('./basetypes/Quantity');
const DateTime = require('./basetypes/DateTime');
const QDMDate = require('./basetypes/QDMDate');
const Any = require('./basetypes/Any');
const AnyEntity = require('./basetypes/AnyEntity');
const { ComponentSchema } = require('./attributes/Component');
const { FacilityLocationSchema } = require('./attributes/FacilityLocation');
const { EntitySchema } = require('./attributes/Entity');


const [Number, String] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
];

const SubstanceRecommendedSchema = DataElementSchema({
  authorDatetime: DateTime,
  reason: Code,
  dosage: Quantity,
  frequency: Code,
  refills: Number,
  route: Code,
  negationRationale: Code,
  requester: [AnyEntity],
  qdmTitle: { type: String, default: 'Substance, Recommended' },
  hqmfOid: { type: String, default: '2.16.840.1.113883.10.20.28.4.78' },
  qdmCategory: { type: String, default: 'substance' },
  qdmStatus: { type: String, default: 'recommended' },
  qdmVersion: { type: String, default: '5.6' },
  _type: { type: String, default: 'QDM::SubstanceRecommended' },

});

module.exports.SubstanceRecommendedSchema = SubstanceRecommendedSchema;
class SubstanceRecommended extends mongoose.Document {
  constructor(object) {
    super(object, SubstanceRecommendedSchema);
    this._type = 'QDM::SubstanceRecommended';
  }
}

module.exports.SubstanceRecommended = SubstanceRecommended;

