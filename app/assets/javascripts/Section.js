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

const SectionSchema = DataElementSchema({
  title: Any,
  code: Any,
  author: Any,
  focus: Any,
  text: Any,
  mode: Any,
  orderedBy: Any,
  entry: Any,
  emptyReason: Any,
  section: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'Section' },

});

module.exports.SectionSchema = SectionSchema;
module.exports.Section = mongoose.model('Section', SectionSchema);
