const mongoose = require('mongoose');

var DataElement = require('./basetypes/DataElement');
var Schema = mongoose.Schema;
var Code = require('./basetypes/Code');
var Interval = require('./basetypes/Interval');
var Quantity = require('./basetypes/Quantity');
var Integer = Schema.Types.Integer;
var Array = Schema.Types.Array;
var String = Schema.Types.String;
var Float = Schema.Types.Float;
var Time = Schema.Types.Time;

var ComponentSchema = DataElement.extendSchema(DataElement.DataElementSchema, {
  code: Code,
  result: {},
  qdm_version: { type: String, default: "5.3" }
});

module.exports.ComponentSchema = ComponentSchema;
module.exports.Component = mongoose.model("Component", ComponentSchema);
