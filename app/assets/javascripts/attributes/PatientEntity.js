const mongoose = require('mongoose/browser');

const { EntitySchemaFunction } = require('./Entity')
const Code = require('../basetypes/Code');
const Interval = require('../basetypes/Interval');
const Quantity = require('../basetypes/Quantity');
const DateTime = require('../basetypes/DateTime');
const Date = require('../basetypes/Date');
const Any = require('../basetypes/Any');

const [Number, String] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
];

const PatientEntitySchema = EntitySchemaFunction({
  qdmVersion: { type: String, default: '5.5' },
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

