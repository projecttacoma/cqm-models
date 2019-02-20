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

const ItemSchema = DataElementSchema({
  sequence: Any,
  careTeamSequence: Any,
  diagnosisSequence: Any,
  procedureSequence: Any,
  informationSequence: Any,
  revenue: Any,
  category: Any,
  productOrService: Any,
  modifier: Any,
  programCode: Any,
  serviced: Any,
  location: Any,
  quantity: Any,
  unitPrice: Any,
  factor: Any,
  net: Any,
  udi: Any,
  bodySite: Any,
  subSite: Any,
  encounter: Any,
  noteNumber: Any,
  adjudication: Any,
  detail: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'Item' },

});

module.exports.ItemSchema = ItemSchema;
module.exports.Item = mongoose.model('Item', ItemSchema);
