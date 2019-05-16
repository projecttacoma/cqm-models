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

const SymptomSchema = DataElementSchema({
  prevalencePeriod: Interval,
  severity: Code,
  qdmTitle: { type: String, default: 'Symptom' },
  hqmfOid: { type: String, default: '2.16.840.1.113883.10.20.28.4.116' },
  qrdaOid: { type: String, default: '2.16.840.1.113883.10.20.24.3.136' },
  qdmCategory: { type: String, default: 'symptom' },
  qdmVersion: { type: String, default: '5.4' },
  _type: { type: String, default: 'QDM::Symptom' },

});

module.exports.SymptomSchema = SymptomSchema;
class Symptom extends mongoose.Document {
  constructor(object) {
    super(object, SymptomSchema);
    this._type = 'QDM::Symptom';
  }
}
module.exports.Symptom = Symptom;
