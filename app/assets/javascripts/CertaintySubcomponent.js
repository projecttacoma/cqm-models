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

const CertaintySubcomponentSchema = DataElementSchema({
  type: Any,
  rating: Any,
  note: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'CertaintySubcomponent' },

});

module.exports.CertaintySubcomponentSchema = CertaintySubcomponentSchema;
module.exports.CertaintySubcomponent = mongoose.model('CertaintySubcomponent', CertaintySubcomponentSchema);
