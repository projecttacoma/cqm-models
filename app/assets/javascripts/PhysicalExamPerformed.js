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

const PhysicalExamPerformedSchema = DataElementSchema({
  authorDatetime: DateTime,
  relevantPeriod: Interval,
  reason: Code,
  method: Code,
  result: Any,
  anatomicalLocationSite: Code,
  negationRationale: Code,
  components: [ComponentSchema],
  qdmTitle: { type: String, default: 'Physical Exam, Performed' },
  hqmfOid: { type: String, default: '2.16.840.1.113883.10.20.28.4.62' },
  qdmCategory: { type: String, default: 'physical_exam' },
  qdmStatus: { type: String, default: 'performed' },
  qdmVersion: { type: String, default: '5.4' },
  _type: { type: String, default: 'QDM::PhysicalExamPerformed' },

});

module.exports.PhysicalExamPerformedSchema = PhysicalExamPerformedSchema;
class PhysicalExamPerformed extends mongoose.Document {
  constructor(object) {
    super(object, PhysicalExamPerformedSchema);
    this._type = 'QDM::PhysicalExamPerformed';
  }
}
module.exports.PhysicalExamPerformed = PhysicalExamPerformed;
