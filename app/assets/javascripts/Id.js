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

var IdSchema = DataElement.extendSchema(DataElement.DataElementSchema, {
  naming_system: String,
  value: String,
  qdm_version: { type: String, default: "5.3" }
});

module.exports.IdSchema = IdSchema;
module.exports.Id = mongoose.model("Id", IdSchema);
