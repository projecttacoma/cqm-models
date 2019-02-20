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

const CodeSystemSchema = DataElementSchema({
  url: Any,
  identifier: Any,
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
  caseSensitive: Any,
  valueSet: Any,
  hierarchyMeaning: Any,
  compositional: Any,
  versionNeeded: Any,
  content: Any,
  supplements: Any,
  count: Any,
  filter: Any,
  property: Any,
  concept: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'CodeSystem' },

});

module.exports.CodeSystemSchema = CodeSystemSchema;
module.exports.CodeSystem = mongoose.model('CodeSystem', CodeSystemSchema);
