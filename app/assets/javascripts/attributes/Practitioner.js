const mongoose = require('mongoose/browser');

const { EntitySchemaFunction } = require('./Entity');
const Code = require('../basetypes/Code');
const Interval = require('../basetypes/Interval');
const Quantity = require('../basetypes/Quantity');
const DateTime = require('../basetypes/DateTime');
const QDMDate = require('../basetypes/QDMDate');
const Any = require('../basetypes/Any');

const [Number, String] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
];

const PractitionerSchema = EntitySchemaFunction({
  role: Code,
  specialty: Code,
  qualification: Code,
  hqmfOid: { type: String, default: '2.16.840.1.113883.10.20.28.4.137' },
  qrdaOid: { type: String, default: '2.16.840.1.113883.10.20.24.3.162' },
  _type: { type: String, default: 'QDM::Practitioner' },

});

module.exports.PractitionerSchema = PractitionerSchema;
class Practitioner extends mongoose.Document {
  constructor(object) {
    super(object, PractitionerSchema);
    this._type = 'QDM::Practitioner';
  }
}

module.exports.Practitioner = Practitioner;

