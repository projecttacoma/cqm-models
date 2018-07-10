const mongoose = require('mongoose');
const { DataElementSchema } = require('./basetypes/DataElement');
const Code = require('./basetypes/Code');
const Interval = require('./basetypes/Interval');
const Quantity = require('./basetypes/Quantity');
const DateTime = require('./basetypes/DateTime');
const { ComponentSchema } = require('./Component');
const { FacilityLocationSchema } = require('./FacilityLocation');
const Any = require('./basetypes/Any');

const [Number, String, Mixed] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Mixed,
];

const RatioSchema = DataElementSchema({
  numerator: Quantity,
  denominator: Quantity,
  qdmVersion: { type: String, default: '5.3' },
  _type: { type: String, default: 'Ratio' },

});

module.exports.RatioSchema = RatioSchema;
module.exports.Ratio = mongoose.model('Ratio', RatioSchema);
