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

const ContractSchema = DataElementSchema({
  identifier: Any,
  url: Any,
  version: Any,
  status: Any,
  legalState: Any,
  instantiatesCanonical: Any,
  instantiatesUri: Any,
  contentDerivative: Any,
  issued: Any,
  applies: Any,
  expirationType: Any,
  subject: Any,
  authority: Any,
  domain: Any,
  site: Any,
  name: Any,
  title: Any,
  subtitle: Any,
  alias: Any,
  author: Any,
  scope: Any,
  topic: Any,
  type: Any,
  subType: Any,
  contentDefinition: Any,
  term: Any,
  supportingInfo: Any,
  relevantHistory: Any,
  signer: Any,
  friendly: Any,
  legal: Any,
  rule: Any,
  legallyBinding: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'Contract' },

});

module.exports.ContractSchema = ContractSchema;
module.exports.Contract = mongoose.model('Contract', ContractSchema);
