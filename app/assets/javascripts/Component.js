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

const ComponentSchema = DataElement.extendSchema(DataElement.DataElementSchema, {
  code: Code,
  result: {},
  qdm_version: { type: String, default: '5.3' },

});

module.exports.ComponentSchema = ComponentSchema;
module.exports.Component = mongoose.model('Component', ComponentSchema);
