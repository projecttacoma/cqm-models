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

const SupplementalDataSchema = DataElementSchema({
  code: Any,
  usage: Any,
  description: Any,
  criteria: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'SupplementalData' },

});

module.exports.SupplementalDataSchema = SupplementalDataSchema;
module.exports.SupplementalData = mongoose.model('SupplementalData', SupplementalDataSchema);
