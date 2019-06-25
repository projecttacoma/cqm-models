const mongoose = require('mongoose/browser');

const { IdentifierSchema } = require('./Identifier');
const { DataElementSchema } = require('./basetypes/DataElement');
const Code = require('./basetypes/Code');
const Interval = require('./basetypes/Interval');
const Quantity = require('./basetypes/Quantity');
const DateTime = require('./basetypes/DateTime');
const Date = require('./basetypes/Date');
const Any = require('./basetypes/Any');
const { ComponentSchema } = require('./attributes/Component');
const { FacilityLocationSchema } = require('./attributes/FacilityLocation');
const { DiagnosisComponentSchema } = require('./attributes/DiagnosisComponent');

const [Number, String] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
];

const AllergyIntoleranceSchema = DataElementSchema({
  authorDatetime: DateTime,
  prevalencePeriod: Interval,
  type: Code,
  severity: Code,
  recorder: Any,
  qdmTitle: { type: String, default: 'Allergy/Intolerance' },
  hqmfOid: { type: String, default: '2.16.840.1.113883.10.20.28.4.119' },
  qdmCategory: { type: String, default: 'allergy' },
  qdmStatus: { type: String, default: 'intolerance' },
  qdmVersion: { type: String, default: '5.5' },
  _type: { type: String, default: 'QDM::AllergyIntolerance' },

});

module.exports.AllergyIntoleranceSchema = AllergyIntoleranceSchema;
class AllergyIntolerance extends mongoose.Document {
  constructor(object) {
    super(object, AllergyIntoleranceSchema);
    this._type = 'QDM::AllergyIntolerance';
  }
}

module.exports.AllergyIntolerance = AllergyIntolerance;

