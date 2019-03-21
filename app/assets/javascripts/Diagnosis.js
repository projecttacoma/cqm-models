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

const DiagnosisSchema = DataElementSchema({
  authorDatetime: DateTime,
  prevalencePeriod: Interval,
  anatomicalLocationSite: Code,
  severity: Code,
  hqmfTitle: { type: String, default: 'Diagnosis' },
  hqmfOid: { type: String, default: '2.16.840.1.113883.10.20.28.3.110' },
  qrdaOid: { type: String, default: '2.16.840.1.113883.10.20.24.3.135' },
  qdmCategory: { type: String, default: 'condition' },
  qdmVersion: { type: String, default: '5.4' },
  _type: { type: String, default: 'Diagnosis' },

});

module.exports.DiagnosisSchema = DiagnosisSchema;
class Diagnosis extends mongoose.Document {
  constructor(object) {
    super(object, DiagnosisSchema);
  }
}
module.exports.Diagnosis = Diagnosis;
