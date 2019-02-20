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

const OrganizationAffiliationSchema = DataElementSchema({
  identifier: Any,
  active: Any,
  period: Any,
  organization: Any,
  participatingOrganization: Any,
  network: Any,
  code: Any,
  specialty: Any,
  location: Any,
  healthcareService: Any,
  telecom: Any,
  endpoint: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'OrganizationAffiliation' },

});

module.exports.OrganizationAffiliationSchema = OrganizationAffiliationSchema;
module.exports.OrganizationAffiliation = mongoose.model('OrganizationAffiliation', OrganizationAffiliationSchema);
