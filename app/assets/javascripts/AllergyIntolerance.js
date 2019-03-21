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
const AllergyIntoleranceSchema = DataElementSchema({
  authorDatetime: DateTime,
  prevalencePeriod: Interval,
  type: Code,
  severity: Code,
  hqmfTitle: { type: String, default: 'Allergy/Intolerance' },
  hqmfOid: { type: String, default: '2.16.840.1.113883.10.20.28.3.119' },
  qdmCategory: { type: String, default: 'allergy' },
  qdmStatus: { type: String, default: 'intolerance' },
  qdmVersion: { type: String, default: '5.4' },
  _type: { type: String, default: 'AllergyIntolerance' },

});
module.exports.AllergyIntoleranceSchema = AllergyIntoleranceSchema;
class AllergyIntolerance extends mongoose.Document {
  constructor(object) {
    super(object, AllergyIntoleranceSchema);
  }
}
module.exports.AllergyIntolerance = AllergyIntolerance;
