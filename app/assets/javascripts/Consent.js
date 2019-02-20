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

const ConsentSchema = DataElementSchema({
  identifier: Any,
  status: Any,
  scope: Any,
  category: Any,
  patient: Any,
  dateTime: Any,
  performer: Any,
  organization: Any,
  source: Any,
  policy: Any,
  policyRule: Any,
  verification: Any,
  provision: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'Consent' },

});

module.exports.ConsentSchema = ConsentSchema;
module.exports.Consent = mongoose.model('Consent', ConsentSchema);
