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

const RatioSchema = DataElement.extendSchema(DataElement.DataElementSchema, {
  numerator: Quantity,
  denominator: Quantity,
  qdm_version: { type: String, default: '5.3' },

});

module.exports.RatioSchema = RatioSchema;
module.exports.Ratio = mongoose.model('Ratio', RatioSchema);
