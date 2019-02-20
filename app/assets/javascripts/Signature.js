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

const SignatureSchema = DataElementSchema({
  type: Any,
  when: Any,
  who: Any,
  onBehalfOf: Any,
  targetFormat: Any,
  sigFormat: Any,
  data: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'Signature' },

});

module.exports.SignatureSchema = SignatureSchema;
module.exports.Signature = mongoose.model('Signature', SignatureSchema);
