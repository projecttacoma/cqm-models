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

const ExampleScenarioSchema = DataElementSchema({
  url: Any,
  identifier: Any,
  version: Any,
  name: Any,
  status: Any,
  experimental: Any,
  date: Any,
  publisher: Any,
  contact: Any,
  useContext: Any,
  jurisdiction: Any,
  copyright: Any,
  purpose: Any,
  actor: Any,
  instance: Any,
  process: Any,
  workflow: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'ExampleScenario' },

});

module.exports.ExampleScenarioSchema = ExampleScenarioSchema;
module.exports.ExampleScenario = mongoose.model('ExampleScenario', ExampleScenarioSchema);
