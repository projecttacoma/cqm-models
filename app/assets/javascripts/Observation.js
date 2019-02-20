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

const ObservationSchema = DataElementSchema({
  identifier: Any,
  basedOn: Any,
  partOf: Any,
  status: Any,
  category: Any,
  code: Any,
  subject: Any,
  focus: Any,
  encounter: Any,
  effective: Any,
  issued: Any,
  performer: Any,
  value: Any,
  dataAbsentReason: Any,
  interpretation: Any,
  note: Any,
  bodySite: Any,
  method: Any,
  specimen: Any,
  device: Any,
  referenceRange: Any,
  hasMember: Any,
  derivedFrom: Any,
  component: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'Observation' },

});

module.exports.ObservationSchema = ObservationSchema;
module.exports.Observation = mongoose.model('Observation', ObservationSchema);
