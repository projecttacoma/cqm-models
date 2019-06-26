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
  type: Code,
  qdmVersion: { type: String, default: '5.5' },
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

