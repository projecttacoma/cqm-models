const mongoose = require('mongoose');
const { DataElementSchema } = require('./basetypes/DataElement');
const Code = require('./basetypes/Code');
const Interval = require('./basetypes/Interval');
const Quantity = require('./basetypes/Quantity');
const DateTime = require('./basetypes/DateTime');
const Any = require('./basetypes/Any');

const [Number, String] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
];

const ComponentSchema = DataElementSchema({
  result: Any,
  qdmVersion: { type: String, default: '5.3' },
  _type: { type: String, default: 'Component' },

});

module.exports.ComponentSchema = ComponentSchema;
module.exports.Component = mongoose.model('Component', ComponentSchema);
