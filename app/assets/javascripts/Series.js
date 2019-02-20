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

const SeriesSchema = DataElementSchema({
  uid: Any,
  number: Any,
  modality: Any,
  description: Any,
  numberOfInstances: Any,
  endpoint: Any,
  bodySite: Any,
  laterality: Any,
  specimen: Any,
  started: Any,
  performer: Any,
  instance: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'Series' },

});

module.exports.SeriesSchema = SeriesSchema;
module.exports.Series = mongoose.model('Series', SeriesSchema);
