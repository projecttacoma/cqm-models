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

const ParticipationSchema = DataElement.extendSchema(DataElement.DataElementSchema, {
  participation_period: Interval,
  qdm_version: { type: String, default: '5.3' },

});

module.exports.ParticipationSchema = ParticipationSchema;
module.exports.Participation = mongoose.model('Participation', ParticipationSchema);
