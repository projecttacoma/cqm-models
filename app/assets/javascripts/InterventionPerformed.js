const mongoose = require('mongoose/browser');
const { DataElementSchema } = require('./basetypes/DataElement');
const Code = require('./basetypes/Code');
const Interval = require('./basetypes/Interval');
const Quantity = require('./basetypes/Quantity');
const DateTime = require('./basetypes/DateTime');
const { ComponentSchema } = require('./Component');
const { FacilityLocationSchema } = require('./FacilityLocation');
const { IdSchema } = require('./Id');
const Any = require('./basetypes/Any');

const [Number, String] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
];

const InterventionPerformedSchema = DataElementSchema({
  authorDatetime: DateTime,
  relevantPeriod: Interval,
  reason: Code,
  result: Any,
  status: Code,
  negationRationale: Code,
  hqmfOid: { type: String, default: '2.16.840.1.113883.10.20.28.3.36' },
  qdmCategory: { type: String, default: 'intervention' },
  qdmStatus: { type: String, default: 'performed' },
  qdmVersion: { type: String, default: '5.4' },
  _type: { type: String, default: 'InterventionPerformed' },

});

module.exports.InterventionPerformedSchema = InterventionPerformedSchema;
class InterventionPerformed extends mongoose.Document {
  constructor(object) {
    super(object, InterventionPerformedSchema);
  }
}
module.exports.InterventionPerformed = InterventionPerformed;
