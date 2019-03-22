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

const SubstanceAdministeredSchema = DataElementSchema({
  authorDatetime: DateTime,
  relevantPeriod: Interval,
  dosage: Quantity,
  frequency: Code,
  route: Code,
  negationRationale: Code,
  hqmfTitle: { type: String, default: 'Substance, Administered' },
  hqmfOid: { type: String, default: '2.16.840.1.113883.10.20.28.4.73' },
  qdmCategory: { type: String, default: 'substance' },
  qdmStatus: { type: String, default: 'administered' },
  qdmVersion: { type: String, default: '5.4' },
  _type: { type: String, default: 'SubstanceAdministered' },

});

module.exports.SubstanceAdministeredSchema = SubstanceAdministeredSchema;
class SubstanceAdministered extends mongoose.Document {
  constructor(object) {
    super(object, SubstanceAdministeredSchema);
  }
}
module.exports.SubstanceAdministered = SubstanceAdministered;
