const mongoose = require('mongoose');
const { DataElementSchema } = require('./basetypes/DataElement');
const Code = require('./basetypes/Code');
const Interval = require('./basetypes/Interval');
const Quantity = require('./basetypes/Quantity');
const DateTime = require('./basetypes/DateTime');
const { ComponentSchema } = require('./Component');
const { FacilityLocationSchema } = require('./FacilityLocation');
const { IdSchema } = require('./Id');
const Any = require('./basetypes/Any');

const [Number, String] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
];

const MedicinalProductPackagedSchema = DataElementSchema({
  identifier: Any,
  subject: Any,
  description: Any,
  legalStatusOfSupply: Any,
  marketingStatus: Any,
  marketingAuthorization: Any,
  manufacturer: Any,
  batchIdentifier: Any,
  packageItem: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'MedicinalProductPackaged' },

});

module.exports.MedicinalProductPackagedSchema = MedicinalProductPackagedSchema;
module.exports.MedicinalProductPackaged = mongoose.model('MedicinalProductPackaged', MedicinalProductPackagedSchema);
