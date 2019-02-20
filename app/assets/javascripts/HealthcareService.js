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

const HealthcareServiceSchema = DataElementSchema({
  identifier: Any,
  active: Any,
  providedBy: Any,
  category: Any,
  type: Any,
  specialty: Any,
  location: Any,
  name: Any,
  comment: Any,
  extraDetails: Any,
  photo: Any,
  telecom: Any,
  coverageArea: Any,
  serviceProvisionCode: Any,
  eligibility: Any,
  program: Any,
  characteristic: Any,
  communication: Any,
  referralMethod: Any,
  appointmentRequired: Any,
  availableTime: Any,
  notAvailable: Any,
  availabilityExceptions: Any,
  endpoint: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'HealthcareService' },

});

module.exports.HealthcareServiceSchema = HealthcareServiceSchema;
module.exports.HealthcareService = mongoose.model('HealthcareService', HealthcareServiceSchema);
