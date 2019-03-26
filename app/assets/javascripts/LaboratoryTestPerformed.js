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

const LaboratoryTestPerformedSchema = DataElementSchema({
  authorDatetime: DateTime,
  relevantPeriod: Interval,
  status: Code,
  method: Code,
  result: Any,
  resultDatetime: DateTime,
  reason: Code,
  referenceRange: Interval,
  negationRationale: Code,
  components: [ComponentSchema],
  qdmTitle: { type: String, default: 'Laboratory Test, Performed' },
  hqmfOid: { type: String, default: '2.16.840.1.113883.10.20.28.4.42' },
  qdmCategory: { type: String, default: 'laboratory_test' },
  qdmStatus: { type: String, default: 'performed' },
  hqmfTitle: { type: String, default: 'Laboratory Test, Performed' },
  qdmVersion: { type: String, default: '5.4' },
  _type: { type: String, default: 'LaboratoryTestPerformed' },

});

module.exports.LaboratoryTestPerformedSchema = LaboratoryTestPerformedSchema;
class LaboratoryTestPerformed extends mongoose.Document {
  constructor(object) {
    super(object, LaboratoryTestPerformedSchema);
  }
}
module.exports.LaboratoryTestPerformed = LaboratoryTestPerformed;
