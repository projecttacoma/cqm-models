const mongoose = require('mongoose');
const DataElement = require('./basetypes/DataElement');
const Code = require('./basetypes/Code');
const Interval = require('./basetypes/Interval');
const Quantity = require('./basetypes/Quantity');

const [Number, String, Date] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Date,
];

const IdSchema = DataElement.extendSchema(DataElement.DataElementSchema, {
  naming_system: String,
  value: String,
  qdm_version: { type: String, default: '5.3' },
  class_name: { type: String, default: 'Id' },

});

module.exports.IdSchema = IdSchema;
module.exports.Id = mongoose.model('Id', IdSchema);
