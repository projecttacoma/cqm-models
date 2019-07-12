const mongoose = require('mongoose/browser');

const { IdentifierSchema } = require('./attributes/Identifier');
const { DataElementSchema } = require('./basetypes/DataElement');
const { Code } = require('./basetypes/Code');
const { Interval } = require('./basetypes/Interval');
const { Quantity } = require('./basetypes/Quantity');
const { DateTime } = require('./basetypes/DateTime');
const { QDMDate } = require('./basetypes/QDMDate');
const { Any } = require('./basetypes/Any');
const { ComponentSchema } = require('./attributes/Component');
const { FacilityLocationSchema } = require('./attributes/FacilityLocation');
const { EntitySchema } = require('./attributes/Entity');


const [Number, String] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
];

const DeviceAppliedSchema = DataElementSchema({
  authorDatetime: DateTime,
  relevantDatetime: DateTime,
  relevantPeriod: Interval,
  negationRationale: Code,
  reason: Code,
  anatomicalLocationSite: Code,
  performer: EntitySchema,
  qdmTitle: { type: String, default: 'Device, Applied' },
  hqmfOid: { type: String, default: '2.16.840.1.113883.10.20.28.4.13' },
  qdmCategory: { type: String, default: 'device' },
  qdmStatus: { type: String, default: 'applied' },
  qdmVersion: { type: String, default: '5.5' },
  _type: { type: String, default: 'QDM::DeviceApplied' },

});

module.exports.DeviceAppliedSchema = DeviceAppliedSchema;
class DeviceApplied extends mongoose.Document {
  constructor(object) {
    super(object, DeviceAppliedSchema);
    this._type = 'QDM::DeviceApplied';
  }
}

module.exports.DeviceApplied = DeviceApplied;

