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

const CoverageEligibilityRequestSchema = DataElementSchema({
  identifier: Any,
  status: Any,
  priority: Any,
  purpose: Any,
  patient: Any,
  serviced: Any,
  created: Any,
  enterer: Any,
  provider: Any,
  insurer: Any,
  facility: Any,
  supportingInfo: Any,
  insurance: Any,
  item: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'CoverageEligibilityRequest' },

});

module.exports.CoverageEligibilityRequestSchema = CoverageEligibilityRequestSchema;
module.exports.CoverageEligibilityRequest = mongoose.model('CoverageEligibilityRequest', CoverageEligibilityRequestSchema);
