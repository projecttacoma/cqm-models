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

const MessageDefinitionSchema = DataElementSchema({
  url: Any,
  identifier: Any,
  version: Any,
  name: Any,
  title: Any,
  replaces: Any,
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
  base: Any,
  parent: Any,
  event: Any,
  category: Any,
  focus: Any,
  responseRequired: Any,
  allowedResponse: Any,
  graph: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'MessageDefinition' },

});

module.exports.MessageDefinitionSchema = MessageDefinitionSchema;
module.exports.MessageDefinition = mongoose.model('MessageDefinition', MessageDefinitionSchema);
