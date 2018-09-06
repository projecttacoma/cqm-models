const mongoose = require('mongoose');
const { DataElementSchema } = require('./basetypes/DataElement');
const Code = require('./basetypes/Code');
const Interval = require('./basetypes/Interval');
const Quantity = require('./basetypes/Quantity');
const DateTime = require('./basetypes/DateTime');
const { ComponentSchema } = require('./Component');
const { FacilityLocationSchema } = require('./FacilityLocation');
const { IdSchema } = require('./Id');
const Any = require('./basetypes/Any');

const [Number, String] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
];

const ImmunizationAdministeredSchema = DataElementSchema({
  authorDatetime: DateTime,
  reason: Code,
  dosage: Quantity,
  route: Code,
  negationRationale: Code,
  hqmfOid: { type: String, default: '2.16.840.1.113883.10.20.28.3.112' },
  qrdaOid: { type: String, default: '2.16.840.1.113883.10.20.24.3.140' },
  category: { type: String, default: 'immunization' },
  qdmStatus: { type: String, default: 'administered' },
  qdmVersion: { type: String, default: '5.4' },
  _type: { type: String, default: 'ImmunizationAdministered' },

});

module.exports.ImmunizationAdministeredSchema = ImmunizationAdministeredSchema;
module.exports.ImmunizationAdministered = mongoose.model('ImmunizationAdministered', ImmunizationAdministeredSchema);
