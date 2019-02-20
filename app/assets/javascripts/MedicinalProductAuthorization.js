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

const MedicinalProductAuthorizationSchema = DataElementSchema({
  identifier: Any,
  subject: Any,
  country: Any,
  jurisdiction: Any,
  status: Any,
  statusDate: Any,
  restoreDate: Any,
  validityPeriod: Any,
  dataExclusivityPeriod: Any,
  dateOfFirstAuthorization: Any,
  internationalBirthDate: Any,
  legalBasis: Any,
  jurisdictionalAuthorization: Any,
  holder: Any,
  regulator: Any,
  procedure: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'MedicinalProductAuthorization' },

});

module.exports.MedicinalProductAuthorizationSchema = MedicinalProductAuthorizationSchema;
module.exports.MedicinalProductAuthorization = mongoose.model('MedicinalProductAuthorization', MedicinalProductAuthorizationSchema);
