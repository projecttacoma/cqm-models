const mongoose = require('mongoose/browser');

const { IdentifierSchema } = require('./attributes/Identifier');
const { DataElementSchema } = require('./basetypes/DataElement');
const Code = require('./basetypes/Code');
const Interval = require('./basetypes/Interval');
const Quantity = require('./basetypes/Quantity');
const DateTime = require('./basetypes/DateTime');
const QDMDate = require('./basetypes/QDMDate');
const Any = require('./basetypes/Any');
const AnyEntity = require('./basetypes/AnyEntity');
const { ComponentSchema } = require('./attributes/Component');
const { FacilityLocationSchema } = require('./attributes/FacilityLocation');
const { EntitySchema } = require('./attributes/Entity');


const [Number, String] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
];

const ParticipationSchema = DataElementSchema({
  participationPeriod: Interval,
  qdmTitle: { type: String, default: 'Participation' },
  hqmfOid: { type: String, default: '2.16.840.1.113883.10.20.28.4.130' },
  qdmCategory: { type: String, default: 'participation' },
  qdmVersion: { type: String, default: '5.6' },
  _type: { type: String, default: 'QDM::Participation' },

});

module.exports.ParticipationSchema = ParticipationSchema;
class Participation extends mongoose.Document {
  constructor(object) {
    super(object, ParticipationSchema);
    this._type = 'QDM::Participation';
  }
}

module.exports.Participation = Participation;

