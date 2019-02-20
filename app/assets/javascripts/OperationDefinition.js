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

const OperationDefinitionSchema = DataElementSchema({
  url: Any,
  version: Any,
  name: Any,
  title: Any,
  status: Any,
  kind: Any,
  experimental: Any,
  date: Any,
  publisher: Any,
  contact: Any,
  description: Any,
  useContext: Any,
  jurisdiction: Any,
  purpose: Any,
  affectsState: Any,
  code: Any,
  comment: Any,
  base: Any,
  resource: Any,
  system: Any,
  type: Any,
  instance: Any,
  inputProfile: Any,
  outputProfile: Any,
  parameter: Any,
  overload: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'OperationDefinition' },

});

module.exports.OperationDefinitionSchema = OperationDefinitionSchema;
module.exports.OperationDefinition = mongoose.model('OperationDefinition', OperationDefinitionSchema);
