const mongoose = require('mongoose');
const { DataElementSchema } = require('./basetypes/DataElement');
const Code = require('./basetypes/Code');
const Interval = require('./basetypes/Interval');
const Quantity = require('./basetypes/Quantity');
const DateTime = require('./basetypes/DateTime');

const [Number, String] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
];

const FacilityLocationSchema = DataElementSchema({
  code: Code,
  location_period: Interval,
  qdm_version: { type: String, default: '5.3' },
  _type: { type: String, default: 'FacilityLocation' },

});

module.exports.FacilityLocationSchema = FacilityLocationSchema;
module.exports.FacilityLocation = mongoose.model('FacilityLocation', FacilityLocationSchema);
