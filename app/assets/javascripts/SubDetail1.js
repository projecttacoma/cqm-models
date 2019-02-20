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

const SubDetail1Schema = DataElementSchema({
  productOrService: Any,
  modifier: Any,
  quantity: Any,
  unitPrice: Any,
  factor: Any,
  net: Any,
  noteNumber: Any,
  adjudication: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'SubDetail1' },

});

module.exports.SubDetail1Schema = SubDetail1Schema;
module.exports.SubDetail1 = mongoose.model('SubDetail1', SubDetail1Schema);
