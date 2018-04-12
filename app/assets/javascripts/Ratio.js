const mongoose = require('mongoose');
const { DataElementSchema } = require('./basetypes/DataElement');
const Code = require('./basetypes/Code');
const Interval = require('./basetypes/Interval');
const Quantity = require('./basetypes/Quantity');
const DateTime = require('./basetypes/DateTime');

const [Number, String] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
];

const RatioSchema = DataElementSchema({
  numerator: Quantity,
  denominator: Quantity,
  qdmVersion: { type: String, default: '5.3' },
  _type: { type: String, default: 'Ratio' },

});

module.exports.RatioSchema = RatioSchema;
module.exports.Ratio = mongoose.model('Ratio', RatioSchema);
