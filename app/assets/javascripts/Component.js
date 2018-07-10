const mongoose = require('mongoose');
const { DataElementSchema } = require('./basetypes/DataElement');
const Code = require('./basetypes/Code');
const Interval = require('./basetypes/Interval');
const Quantity = require('./basetypes/Quantity');
const DateTime = require('./basetypes/DateTime');

const { FacilityLocationSchema } = require('./FacilityLocation');
const Any = require('./basetypes/Any');

const [Number, String, Mixed] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Mixed,
];

const ComponentSchema = new mongoose.Schema({
  code: Mixed,
  result: Any,
  qdmVersion: { type: String, default: '5.3' },
  _type: { type: String, default: 'Component' },

});

module.exports.ComponentSchema = ComponentSchema;
module.exports.Component = mongoose.model('Component', ComponentSchema);
