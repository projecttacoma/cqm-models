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

const ListSchema = DataElementSchema({
  identifier: Any,
  status: Any,
  mode: Any,
  title: Any,
  code: Any,
  subject: Any,
  encounter: Any,
  date: Any,
  source: Any,
  orderedBy: Any,
  note: Any,
  entry: Any,
  emptyReason: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'List' },

});

module.exports.ListSchema = ListSchema;
module.exports.List = mongoose.model('List', ListSchema);
