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

