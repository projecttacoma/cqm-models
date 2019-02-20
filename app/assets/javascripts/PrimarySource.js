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

const PrimarySourceSchema = DataElementSchema({
  who: Any,
  type: Any,
  communicationMethod: Any,
  validationStatus: Any,
  validationDate: Any,
  canPushUpdates: Any,
  pushTypeAvailable: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'PrimarySource' },

});

module.exports.PrimarySourceSchema = PrimarySourceSchema;
module.exports.PrimarySource = mongoose.model('PrimarySource', PrimarySourceSchema);
