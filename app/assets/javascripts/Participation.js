const mongoose = require('mongoose/browser');

const { IdSchema } = require('./Id');
const { DataElementSchema } = require('./basetypes/DataElement');
const Code = require('./basetypes/Code');
const Interval = require('./basetypes/Interval');
const Quantity = require('./basetypes/Quantity');
const DateTime = require('./basetypes/DateTime');
const Any = require('./basetypes/Any');
const { ComponentSchema } = require('./attributes/Component');
const { FacilityLocationSchema } = require('./attributes/FacilityLocation');


const [Number, String] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
];

const ParticipationSchema = DataElementSchema({
  participationPeriod: Interval,
  qdmTitle: { type: String, default: 'Participation' },
  hqmfOid: { type: String, default: '2.16.840.1.113883.10.20.28.4.130' },
  qdmCategory: { type: String, default: 'participation' },
  hqmfTitle: { type: String, default: 'Program Participation' },
  qdmVersion: { type: String, default: '5.4' },
  _type: { type: String, default: 'Participation' },

});

module.exports.ParticipationSchema = ParticipationSchema;
class Participation extends mongoose.Document {
  constructor(object) {
    super(object, ParticipationSchema);
  }
}
module.exports.Participation = Participation;
