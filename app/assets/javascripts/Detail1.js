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

const Detail1Schema = DataElementSchema({
  productOrService: Any,
  modifier: Any,
  quantity: Any,
  unitPrice: Any,
  factor: Any,
  net: Any,
  noteNumber: Any,
  adjudication: Any,
  subDetail: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'Detail1' },

});

module.exports.Detail1Schema = Detail1Schema;
module.exports.Detail1 = mongoose.model('Detail1', Detail1Schema);
