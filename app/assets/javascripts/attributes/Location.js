const mongoose = require('mongoose/browser');

const { IdentifierSchema } = require('./attributes/Identifier');
const { DataElementSchema } = require('./basetypes/DataElement');
const Code = require('./basetypes/Code');
const Interval = require('./basetypes/Interval');
const Quantity = require('./basetypes/Quantity');
const DateTime = require('./basetypes/DateTime');
const QDMDate = require('./basetypes/QDMDate');
const Any = require('./basetypes/Any');
const AnyEntity = require('./basetypes/AnyEntity');
const { ComponentSchema } = require('./attributes/Component');
const { FacilityLocationSchema } = require('./attributes/FacilityLocation');
const { EntitySchema } = require('./attributes/Entity');


const [Number, String] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
];

const LocationSchema = DataElementSchema({
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

