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

const RepeatSchema = DataElementSchema({
  bounds: Any,
  count: Any,
  countMax: Any,
  duration: Any,
  durationMax: Any,
  durationUnit: Any,
  frequency: Any,
  frequencyMax: Any,
  period: Any,
  periodMax: Any,
  periodUnit: Any,
  dayOfWeek: Any,
  timeOfDay: Any,
  when: Any,
  offset: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'Repeat' },

});

module.exports.RepeatSchema = RepeatSchema;
module.exports.Repeat = mongoose.model('Repeat', RepeatSchema);
