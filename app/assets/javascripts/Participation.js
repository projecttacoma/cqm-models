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

const ParticipationSchema = DataElement.extendSchema(DataElement.DataElementSchema, {
  participation_period: Interval,
  qdm_version: { type: String, default: '5.3' },
  class_name: { type: String, default: 'Participation' },

});

module.exports.ParticipationSchema = ParticipationSchema;
module.exports.Participation = mongoose.model('Participation', ParticipationSchema);
