const mongoose = require('mongoose');
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

const InsurancePlanSchema = DataElementSchema({
  identifier: Any,
  status: Any,
  type: Any,
  name: Any,
  alias: Any,
  period: Any,
  ownedBy: Any,
  administeredBy: Any,
  coverageArea: Any,
  contact: Any,
  endpoint: Any,
  network: Any,
  coverage: Any,
  plan: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'InsurancePlan' },

});

module.exports.InsurancePlanSchema = InsurancePlanSchema;
module.exports.InsurancePlan = mongoose.model('InsurancePlan', InsurancePlanSchema);
