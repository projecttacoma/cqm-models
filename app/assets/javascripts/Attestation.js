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

const AttestationSchema = DataElementSchema({
  who: Any,
  onBehalfOf: Any,
  communicationMethod: Any,
  date: Any,
  sourceIdentityCertificate: Any,
  proxyIdentityCertificate: Any,
  proxySignature: Any,
  sourceSignature: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'Attestation' },

});

module.exports.AttestationSchema = AttestationSchema;
module.exports.Attestation = mongoose.model('Attestation', AttestationSchema);
