const mongoose = require('mongoose/browser');

const Code = require('../basetypes/Code');
const Interval = require('../basetypes/Interval');
const Quantity = require('../basetypes/Quantity');
const DateTime = require('../basetypes/DateTime');
const Any = require('../basetypes/Any');


const [Number, String] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
];
const FacilityLocationSchema = new mongoose.Schema({
  code: Code,
  locationPeriod: Interval,
  qdmVersion: { type: String, default: '5.4' },
  _type: { type: String, default: 'FacilityLocation' },

});
module.exports.FacilityLocationSchema = FacilityLocationSchema;
class FacilityLocation extends mongoose.Document {
  constructor(object) {
    super(object, FacilityLocationSchema);
  }
}
module.exports.FacilityLocation = FacilityLocation;
