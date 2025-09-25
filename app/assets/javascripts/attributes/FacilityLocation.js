const mongoose = require('mongoose/browser');

const Code = require('../basetypes/Code');
const DateTimeInterval = require('../basetypes/DateTimeInterval');
const Quantity = require('../basetypes/Quantity');
const DateTime = require('../basetypes/DateTime');
const QDMDate = require('../basetypes/QDMDate');
const Any = require('../basetypes/Any');


const [Number, String] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
];

const FacilityLocationSchema = new mongoose.Schema({
  code: Code,
  locationPeriod: DateTimeInterval,
  qdmVersion: { type: String, default: '5.6' },
  _type: { type: String, default: 'QDM::FacilityLocation' },

});

module.exports.FacilityLocationSchema = FacilityLocationSchema;
class FacilityLocation extends mongoose.Document {
  constructor(object) {
    super(object, FacilityLocationSchema);
    this._type = 'QDM::FacilityLocation';
  }
}

module.exports.FacilityLocation = FacilityLocation;

