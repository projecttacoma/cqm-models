const mongoose = require('mongoose');
const { DataElementSchema } = require('./basetypes/DataElement');
const Code = require('./basetypes/Code');
const Interval = require('./basetypes/Interval');
const Quantity = require('./basetypes/Quantity');
const DateTime = require('./basetypes/DateTime');

const { FacilityLocationSchema } = require('./FacilityLocation');
const { IdSchema } = require('./Id');
const Any = require('./basetypes/Any');

const [Number, String] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
];

const ResultComponentSchema = DataElementSchema({
  referenceRange: Interval,
  qdmVersion: { type: String, default: '5.4' },
  _type: { type: String, default: 'ResultComponent' },

});

module.exports.ResultComponentSchema = ResultComponentSchema;
