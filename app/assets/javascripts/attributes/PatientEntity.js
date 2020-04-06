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

const PatientEntitySchema = EntitySchemaFunction({
  hqmfOid: { type: String, default: '2.16.840.1.113883.10.20.28.4.136' },
  qrdaOid: { type: String, default: '2.16.840.1.113883.10.20.24.3.161' },
  _type: { type: String, default: 'QDM::PatientEntity' },

});

module.exports.PatientEntitySchema = PatientEntitySchema;
class PatientEntity extends mongoose.Document {
  constructor(object) {
    super(object, PatientEntitySchema);
    this._type = 'QDM::PatientEntity';
  }
}

module.exports.PatientEntity = PatientEntity;

