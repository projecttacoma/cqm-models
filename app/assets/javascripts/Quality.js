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

const QualitySchema = DataElementSchema({
  type: Any,
  standardSequence: Any,
  start: Any,
  end: Any,
  score: Any,
  method: Any,
  truthTP: Any,
  queryTP: Any,
  truthFN: Any,
  queryFP: Any,
  gtFP: Any,
  precision: Any,
  recall: Any,
  fScore: Any,
  roc: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'Quality' },

});

module.exports.QualitySchema = QualitySchema;
module.exports.Quality = mongoose.model('Quality', QualitySchema);
