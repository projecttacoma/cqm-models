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

const CarePartnerSchema = EntitySchemaFunction({
  relationship: Code,
  hqmfOid: { type: String, default: '2.16.840.1.113883.10.20.28.4.134' },
  qrdaOid: { type: String, default: '2.16.840.1.113883.10.20.24.3.160' },
  _type: { type: String, default: 'QDM::CarePartner' },

});

module.exports.CarePartnerSchema = CarePartnerSchema;
class CarePartner extends mongoose.Document {
  constructor(object) {
    super(object, CarePartnerSchema);
    this._type = 'QDM::CarePartner';
  }
}

module.exports.CarePartner = CarePartner;

