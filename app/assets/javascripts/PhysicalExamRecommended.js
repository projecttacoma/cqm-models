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

const PhysicalExamRecommendedSchema = DataElementSchema({
  authorDatetime: DateTime,
  reason: Code,
  anatomicalLocationSite: Code,
  negationRationale: Code,
  requester: [AnyEntity],
  qdmTitle: { type: String, default: 'Physical Exam, Recommended' },
  hqmfOid: { type: String, default: '2.16.840.1.113883.10.20.28.4.63' },
  qdmCategory: { type: String, default: 'physical_exam' },
  qdmStatus: { type: String, default: 'recommended' },
  qdmVersion: { type: String, default: '5.6' },
  _type: { type: String, default: 'QDM::PhysicalExamRecommended' },

});

module.exports.PhysicalExamRecommendedSchema = PhysicalExamRecommendedSchema;
class PhysicalExamRecommended extends mongoose.Document {
  constructor(object) {
    super(object, PhysicalExamRecommendedSchema);
    this._type = 'QDM::PhysicalExamRecommended';
  }
}

module.exports.PhysicalExamRecommended = PhysicalExamRecommended;

