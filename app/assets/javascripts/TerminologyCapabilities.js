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

const TerminologyCapabilitiesSchema = DataElementSchema({
  url: Any,
  version: Any,
  name: Any,
  title: Any,
  status: Any,
  experimental: Any,
  date: Any,
  publisher: Any,
  contact: Any,
  description: Any,
  useContext: Any,
  jurisdiction: Any,
  purpose: Any,
  copyright: Any,
  kind: Any,
  software: Any,
  implementation: Any,
  lockedDate: Any,
  codeSystem: Any,
  expansion: Any,
  codeSearch: Any,
  validateCode: Any,
  translation: Any,
  closure: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'TerminologyCapabilities' },

});

module.exports.TerminologyCapabilitiesSchema = TerminologyCapabilitiesSchema;
module.exports.TerminologyCapabilities = mongoose.model('TerminologyCapabilities', TerminologyCapabilitiesSchema);
