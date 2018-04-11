const mongoose = require('mongoose');
const { DataElementSchema } = require('./basetypes/DataElement');
const Code = require('./basetypes/Code');
const Interval = require('./basetypes/Interval');
const Quantity = require('./basetypes/Quantity');

const [Number, String, Date] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Date,
];

const ResultComponentSchema = DataElementSchema({
  reference_range: Interval,
  qdm_version: { type: String, default: '5.3' },
  _type: { type: String, default: 'ResultComponent' },

});

module.exports.ResultComponentSchema = ResultComponentSchema;
module.exports.ResultComponent = mongoose.model('ResultComponent', ResultComponentSchema);
