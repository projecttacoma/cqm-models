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

const ConstraintSchema = DataElementSchema({
  key: Any,
  requirements: Any,
  severity: Any,
  human: Any,
  expression: Any,
  xpath: Any,
  source: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'Constraint' },

});

module.exports.ConstraintSchema = ConstraintSchema;
module.exports.Constraint = mongoose.model('Constraint', ConstraintSchema);
