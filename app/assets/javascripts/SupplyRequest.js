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

const SupplyRequestSchema = DataElementSchema({
  identifier: Any,
  status: Any,
  category: Any,
  priority: Any,
  item: Any,
  quantity: Any,
  parameter: Any,
  occurrence: Any,
  authoredOn: Any,
  requester: Any,
  supplier: Any,
  reasonCode: Any,
  reasonReference: Any,
  deliverFrom: Any,
  deliverTo: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'SupplyRequest' },

});

module.exports.SupplyRequestSchema = SupplyRequestSchema;
module.exports.SupplyRequest = mongoose.model('SupplyRequest', SupplyRequestSchema);
