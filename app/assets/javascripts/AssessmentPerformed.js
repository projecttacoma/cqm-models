const mongoose = require('mongoose');
const { DataElementSchema } = require('./basetypes/DataElement');
const Code = require('./basetypes/Code');
const Interval = require('./basetypes/Interval');
const Quantity = require('./basetypes/Quantity');
const DateTime = require('./basetypes/DateTime');
const { ComponentSchema } = require('./Component');
const { FacilityLocationSchema } = require('./FacilityLocation');
const Any = require('./basetypes/Any');

const [Number, String] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
];

const AssessmentPerformedSchema = DataElementSchema({
  authorDatetime: DateTime,
  negationRationale: Mixed,
  reason: Mixed,
  method: Mixed,
  result: Any,
  components: [ComponentSchema],
  relatedTo: [String],
  hqmfOid: { type: String, default: '2.16.840.1.113883.10.20.28.3.117' },
  category: { type: String, default: 'assessment' },
  qdmStatus: { type: String, default: 'performed' },
  qdmVersion: { type: String, default: '5.3' },
  _type: { type: String, default: 'AssessmentPerformed' },

});

module.exports.AssessmentPerformedSchema = AssessmentPerformedSchema;
module.exports.AssessmentPerformed = mongoose.model('AssessmentPerformed', AssessmentPerformedSchema);
