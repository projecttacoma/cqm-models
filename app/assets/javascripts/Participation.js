const mongoose = require('mongoose');

var DataElement = require('./basetypes/DataElement');
var Schema = mongoose.Schema;
var Code = Schema.Types.Code;
var Interval = Schema.Types.Interval;
var Quantity = Schema.Types.Quantity;
var Integer = Schema.Types.Integer;
var Array = Schema.Types.Array;
var String = Schema.Types.String;
var Float = Schema.Types.Float;
var Time = Schema.Types.Time;

var ParticipationSchema = DataElement.extendSchema(DataElement.DataElementSchema, {
  participation_period: Interval,
  qdm_version: { type: String, default: "5.3" }
});

module.exports = mongoose.model("Participation", ParticipationSchema);
