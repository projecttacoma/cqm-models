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

const SearchParameterSchema = DataElementSchema({
  url: Any,
  version: Any,
  name: Any,
  derivedFrom: Any,
  status: Any,
  experimental: Any,
  date: Any,
  publisher: Any,
  contact: Any,
  description: Any,
  useContext: Any,
  jurisdiction: Any,
  purpose: Any,
  code: Any,
  base: Any,
  type: Any,
  expression: Any,
  xpath: Any,
  xpathUsage: Any,
  target: Any,
  multipleOr: Any,
  multipleAnd: Any,
  comparator: Any,
  modifier: Any,
  chain: Any,
  component: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'SearchParameter' },

});

module.exports.SearchParameterSchema = SearchParameterSchema;
module.exports.SearchParameter = mongoose.model('SearchParameter', SearchParameterSchema);
