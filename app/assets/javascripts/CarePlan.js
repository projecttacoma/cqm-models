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

const CarePlanSchema = DataElementSchema({
  identifier: Any,
  instantiatesCanonical: Any,
  instantiatesUri: Any,
  basedOn: Any,
  replaces: Any,
  partOf: Any,
  status: Any,
  intent: Any,
  category: Any,
  title: Any,
  description: Any,
  subject: Any,
  encounter: Any,
  period: Any,
  created: Any,
  author: Any,
  contributor: Any,
  careTeam: Any,
  addresses: Any,
  supportingInfo: Any,
  goal: Any,
  activity: Any,
  note: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'CarePlan' },

});

module.exports.CarePlanSchema = CarePlanSchema;
module.exports.CarePlan = mongoose.model('CarePlan', CarePlanSchema);
