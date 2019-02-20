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

const TestReportSchema = DataElementSchema({
  identifier: Any,
  name: Any,
  status: Any,
  testScript: Any,
  result: Any,
  score: Any,
  tester: Any,
  issued: Any,
  participant: Any,
  setup: Any,
  test: Any,
  teardown: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'TestReport' },

});

module.exports.TestReportSchema = TestReportSchema;
module.exports.TestReport = mongoose.model('TestReport', TestReportSchema);
