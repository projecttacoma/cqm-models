const mongoose = require('mongoose');
const { DataElementSchema } = require('./basetypes/DataElement');
const Code = require('./basetypes/Code');
const Interval = require('./basetypes/Interval');
const Quantity = require('./basetypes/Quantity');

const [Number, String, Date] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Date,
];

const FacilityLocationSchema = DataElementSchema({
  code: Code,
  location_period: Interval,
  qdm_version: { type: String, default: '5.3' },
  _type: { type: String, default: 'FacilityLocation' },

});

module.exports.FacilityLocationSchema = FacilityLocationSchema;
module.exports.FacilityLocation = mongoose.model('FacilityLocation', FacilityLocationSchema);
