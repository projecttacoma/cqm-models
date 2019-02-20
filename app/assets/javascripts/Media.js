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

const MediaSchema = DataElementSchema({
  identifier: Any,
  basedOn: Any,
  partOf: Any,
  status: Any,
  type: Any,
  modality: Any,
  view: Any,
  subject: Any,
  encounter: Any,
  created: Any,
  issued: Any,
  operator: Any,
  reasonCode: Any,
  bodySite: Any,
  deviceName: Any,
  device: Any,
  height: Any,
  width: Any,
  frames: Any,
  duration: Any,
  content: Any,
  note: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'Media' },

});

module.exports.MediaSchema = MediaSchema;
module.exports.Media = mongoose.model('Media', MediaSchema);
