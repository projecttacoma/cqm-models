const mongoose = require('mongoose/browser');

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

const DiagnosisComponentSchema = new mongoose.Schema({
  code: Code,
  presentOnAdmissionIndicator: Code,
  rank: Number,
  qdmVersion: { type: String, default: '5.6' },
  _type: { type: String, default: 'QDM::DiagnosisComponent' },

});

module.exports.DiagnosisComponentSchema = DiagnosisComponentSchema;
class DiagnosisComponent extends mongoose.Document {
  constructor(object) {
    super(object, DiagnosisComponentSchema);
    this._type = 'QDM::DiagnosisComponent';
  }
}

module.exports.DiagnosisComponent = DiagnosisComponent;

