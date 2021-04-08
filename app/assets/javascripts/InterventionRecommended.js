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

const InterventionRecommendedSchema = DataElementSchema({
  authorDatetime: DateTime,
  reason: Code,
  negationRationale: Code,
  requester: [AnyEntity],
  qdmTitle: { type: String, default: 'Intervention, Recommended' },
  hqmfOid: { type: String, default: '2.16.840.1.113883.10.20.28.4.37' },
  qdmCategory: { type: String, default: 'intervention' },
  qdmStatus: { type: String, default: 'recommended' },
  qdmVersion: { type: String, default: '5.6' },
  _type: { type: String, default: 'QDM::InterventionRecommended' },

});

module.exports.InterventionRecommendedSchema = InterventionRecommendedSchema;
class InterventionRecommended extends mongoose.Document {
  constructor(object) {
    super(object, InterventionRecommendedSchema);
    this._type = 'QDM::InterventionRecommended';
  }
}

module.exports.InterventionRecommended = InterventionRecommended;

