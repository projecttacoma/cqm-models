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

const AppointmentResponseSchema = DataElementSchema({
  identifier: Any,
  appointment: Any,
  start: Any,
  end: Any,
  participantType: Any,
  actor: Any,
  participantStatus: Any,
  comment: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'AppointmentResponse' },

});

module.exports.AppointmentResponseSchema = AppointmentResponseSchema;
module.exports.AppointmentResponse = mongoose.model('AppointmentResponse', AppointmentResponseSchema);
