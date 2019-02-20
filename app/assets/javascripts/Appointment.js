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

const AppointmentSchema = DataElementSchema({
  identifier: Any,
  status: Any,
  cancelationReason: Any,
  serviceCategory: Any,
  serviceType: Any,
  specialty: Any,
  appointmentType: Any,
  reasonCode: Any,
  reasonReference: Any,
  priority: Any,
  description: Any,
  supportingInformation: Any,
  start: Any,
  end: Any,
  minutesDuration: Any,
  slot: Any,
  created: Any,
  comment: Any,
  patientInstruction: Any,
  basedOn: Any,
  participant: Any,
  requestedPeriod: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'Appointment' },

});

module.exports.AppointmentSchema = AppointmentSchema;
module.exports.Appointment = mongoose.model('Appointment', AppointmentSchema);
