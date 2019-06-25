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

const ImmunizationAdministeredSchema = DataElementSchema({
  authorDatetime: DateTime,
  relevantDatetime: DateTime,
  reason: Code,
  dosage: Quantity,
  route: Code,
  negationRationale: Code,
  performer: Any,
  qdmTitle: { type: String, default: 'Immunization, Administered' },
  hqmfOid: { type: String, default: '2.16.840.1.113883.10.20.28.4.112' },
  qrdaOid: { type: String, default: '2.16.840.1.113883.10.20.24.3.140' },
  qdmCategory: { type: String, default: 'immunization' },
  qdmStatus: { type: String, default: 'administered' },
  qdmVersion: { type: String, default: '5.5' },
  _type: { type: String, default: 'QDM::ImmunizationAdministered' },

});

module.exports.ImmunizationAdministeredSchema = ImmunizationAdministeredSchema;
class ImmunizationAdministered extends mongoose.Document {
  constructor(object) {
    super(object, ImmunizationAdministeredSchema);
    this._type = 'QDM::ImmunizationAdministered';
  }
}

module.exports.ImmunizationAdministered = ImmunizationAdministered;

