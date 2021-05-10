const mongoose = require('mongoose/browser');

const { EntitySchemaFunction } = require('./Entity');
const Code = require('../basetypes/Code');
const Interval = require('../basetypes/Interval');
const Quantity = require('../basetypes/Quantity');
const DateTime = require('../basetypes/DateTime');
const QDMDate = require('../basetypes/QDMDate');
const Any = require('../basetypes/Any');

const [Number, String] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
];

const LocationSchema = EntitySchemaFunction({
  locationType: Code,
  hqmfOid: { type: String, default: '2.16.840.1.113883.10.20.28.4.142' },
  _type: { type: String, default: 'QDM::Location' },

});

module.exports.LocationSchema = LocationSchema;
class Location extends mongoose.Document {
  constructor(object) {
    super(object, LocationSchema);
    this._type = 'QDM::Location';
  }
}

module.exports.Location = Location;

