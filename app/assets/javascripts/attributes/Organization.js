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

const OrganizationSchema = EntitySchemaFunction({
  organizationType: Code,
  hqmfOid: { type: String, default: '2.16.840.1.113883.10.20.28.4.135' },
  qrdaOid: { type: String, default: '2.16.840.1.113883.10.20.24.3.163' },
  _type: { type: String, default: 'QDM::Organization' },

});

module.exports.OrganizationSchema = OrganizationSchema;
class Organization extends mongoose.Document {
  constructor(object) {
    super(object, OrganizationSchema);
    this._type = 'QDM::Organization';
  }
}

module.exports.Organization = Organization;

