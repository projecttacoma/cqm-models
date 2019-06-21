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

const AssessmentRecommendedSchema = DataElementSchema({
  authorDatetime: DateTime,
  negationRationale: Code,
  reason: Code,
  requester: Any,
  qdmTitle: { type: String, default: 'Assessment, Recommended' },
  hqmfOid: { type: String, default: '2.16.840.1.113883.10.20.28.4.118' },
  qdmCategory: { type: String, default: 'assessment' },
  qdmStatus: { type: String, default: 'recommended' },
  qdmVersion: { type: String, default: '5.5' },
  _type: { type: String, default: 'QDM::AssessmentRecommended' },

});

module.exports.AssessmentRecommendedSchema = AssessmentRecommendedSchema;
class AssessmentRecommended extends mongoose.Document {
  constructor(object) {
    super(object, AssessmentRecommendedSchema);
    this._type = 'QDM::AssessmentRecommended';
  }
}

module.exports.AssessmentRecommended = AssessmentRecommended;

