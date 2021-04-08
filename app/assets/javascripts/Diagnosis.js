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

const DiagnosisSchema = DataElementSchema({
  authorDatetime: DateTime,
  prevalencePeriod: Interval,
  anatomicalLocationSite: Code,
  severity: Code,
  recorder: [AnyEntity],
  qdmTitle: { type: String, default: 'Diagnosis' },
  hqmfOid: { type: String, default: '2.16.840.1.113883.10.20.28.4.110' },
  qrdaOid: { type: String, default: '2.16.840.1.113883.10.20.24.3.135' },
  qdmCategory: { type: String, default: 'condition' },
  qdmVersion: { type: String, default: '5.6' },
  _type: { type: String, default: 'QDM::Diagnosis' },

});

module.exports.DiagnosisSchema = DiagnosisSchema;
class Diagnosis extends mongoose.Document {
  constructor(object) {
    super(object, DiagnosisSchema);
    this._type = 'QDM::Diagnosis';
  }
}

module.exports.Diagnosis = Diagnosis;

