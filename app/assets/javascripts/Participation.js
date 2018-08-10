const mongoose = require('mongoose');
const { DataElementSchema } = require('./basetypes/DataElement');
const Code = require('./basetypes/Code');
const Interval = require('./basetypes/Interval');
const Quantity = require('./basetypes/Quantity');
const DateTime = require('./basetypes/DateTime');
const { ComponentSchema } = require('./Component');
const { FacilityLocationSchema } = require('./FacilityLocation');
const { IdSchema } = require('./Id');
const Any = require('./basetypes/Any');

const [Number, String] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
];

const ParticipationSchema = DataElementSchema({
  participationPeriod: Interval,
  hqmfOid: { type: String, default: '2.16.840.1.113883.10.20.28.4.130' },
  category: { type: String, default: 'participation' },
  qdmVersion: { type: String, default: '5.3' },
  _type: { type: String, default: 'Participation' },

});

module.exports.ParticipationSchema = ParticipationSchema;
module.exports.Participation = mongoose.model('Participation', ParticipationSchema);
