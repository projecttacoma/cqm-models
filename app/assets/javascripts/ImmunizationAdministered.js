const mongoose = require('mongoose');
const { DataElementSchema } = require('./basetypes/DataElement');
const Code = require('./basetypes/Code');
const Interval = require('./basetypes/Interval');
const Quantity = require('./basetypes/Quantity');
const DateTime = require('./basetypes/DateTime');
const { ComponentSchema } = require('./Component');
const { FacilityLocationSchema } = require('./FacilityLocation');
const Any = require('./basetypes/Any');

const [Number, String, Mixed] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Mixed,
];

const ImmunizationAdministeredSchema = DataElementSchema({
  authorDatetime: DateTime,
  reason: Mixed,
  dosage: Quantity,
  supply: Quantity,
  route: Mixed,
  negationRationale: Mixed,
  hqmfOid: { type: String, default: '2.16.840.1.113883.10.20.28.3.112' },
  qrdaOid: { type: String, default: '2.16.840.1.113883.10.20.24.3.140' },
  category: { type: String, default: 'immunization' },
  qdmStatus: { type: String, default: 'administered' },
  qdmVersion: { type: String, default: '5.3' },
  _type: { type: String, default: 'ImmunizationAdministered' },

});

module.exports.ImmunizationAdministeredSchema = ImmunizationAdministeredSchema;
module.exports.ImmunizationAdministered = mongoose.model('ImmunizationAdministered', ImmunizationAdministeredSchema);
