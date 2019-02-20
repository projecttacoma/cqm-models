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

const ExplanationOfBenefitSchema = DataElementSchema({
  identifier: Any,
  status: Any,
  type: Any,
  subType: Any,
  use: Any,
  patient: Any,
  billablePeriod: Any,
  created: Any,
  enterer: Any,
  insurer: Any,
  provider: Any,
  priority: Any,
  fundsReserveRequested: Any,
  fundsReserve: Any,
  related: Any,
  prescription: Any,
  originalPrescription: Any,
  payee: Any,
  referral: Any,
  facility: Any,
  claim: Any,
  claimResponse: Any,
  outcome: Any,
  disposition: Any,
  preAuthRef: Any,
  preAuthRefPeriod: Any,
  careTeam: Any,
  supportingInfo: Any,
  diagnosis: Any,
  procedure: Any,
  precedence: Any,
  insurance: Any,
  accident: Any,
  item: Any,
  addItem: Any,
  adjudication: Any,
  total: Any,
  payment: Any,
  formCode: Any,
  form: Any,
  processNote: Any,
  benefitPeriod: Any,
  benefitBalance: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'ExplanationOfBenefit' },

});

module.exports.ExplanationOfBenefitSchema = ExplanationOfBenefitSchema;
module.exports.ExplanationOfBenefit = mongoose.model('ExplanationOfBenefit', ExplanationOfBenefitSchema);
