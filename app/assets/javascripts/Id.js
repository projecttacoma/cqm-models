const mongoose = require('mongoose');
const DataElement = require('./basetypes/DataElement');
const Code = require('./basetypes/Code');
const Interval = require('./basetypes/Interval');
const Quantity = require('./basetypes/Quantity');

const [Integer, Array, String, Float, Time] = [
  mongoose.Schema.Types.Integer,
  mongoose.Schema.Types.Array,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Float,
  mongoose.Schema.Types.Time,
];

const IdSchema = DataElement.extendSchema(DataElement.DataElementSchema, {
  naming_system: String,
  value: String,
  qdm_version: { type: String, default: '5.3' },

});

module.exports.IdSchema = IdSchema;
module.exports.Id = mongoose.model('Id', IdSchema);
