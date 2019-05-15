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

const AssessmentPerformedSchema = DataElementSchema({
  authorDatetime: DateTime,
  negationRationale: Code,
  reason: Code,
  method: Code,
  result: Any,
  components: [ComponentSchema],
  relatedTo: [IdSchema],
  qdmTitle: { type: String, default: 'Assessment, Performed' },
  hqmfOid: { type: String, default: '2.16.840.1.113883.10.20.28.4.117' },
  qdmCategory: { type: String, default: 'assessment' },
  qdmStatus: { type: String, default: 'performed' },
  qdmVersion: { type: String, default: '5.4' },
  _type: { type: String, default: 'QDM::AssessmentPerformed' },

});

module.exports.AssessmentPerformedSchema = AssessmentPerformedSchema;
class AssessmentPerformed extends mongoose.Document {
  constructor(object) {
    super(object, AssessmentPerformedSchema);
    this._type = 'QDM::AssessmentPerformed';
  }
}
module.exports.AssessmentPerformed = AssessmentPerformed;
