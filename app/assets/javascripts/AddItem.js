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

const AddItemSchema = DataElementSchema({
  itemSequence: Any,
  detailSequence: Any,
  subDetailSequence: Any,
  provider: Any,
  productOrService: Any,
  modifier: Any,
  programCode: Any,
  serviced: Any,
  location: Any,
  quantity: Any,
  unitPrice: Any,
  factor: Any,
  net: Any,
  bodySite: Any,
  subSite: Any,
  noteNumber: Any,
  adjudication: Any,
  detail: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'AddItem' },

});

module.exports.AddItemSchema = AddItemSchema;
module.exports.AddItem = mongoose.model('AddItem', AddItemSchema);
