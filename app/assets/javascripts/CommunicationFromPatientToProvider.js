const mongoose = require('mongoose');
const { DataElementSchema } = require('./basetypes/DataElement');
const Code = require('./basetypes/Code');
const Interval = require('./basetypes/Interval');
const Quantity = require('./basetypes/Quantity');
const DateTime = require('./basetypes/DateTime');

const [Number, String] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
];

const CommunicationFromPatientToProviderSchema = DataElementSchema({
  author_datetime: DateTime,
  related_to: [String],
  negation_rationale: Code,
  hqmf_oid: { type: String, default: '2.16.840.1.113883.10.20.28.3.8' },
  category: { type: String, default: 'communication' },
  qdm_status: { type: String, default: 'from_patient_to_provider' },
  qdm_version: { type: String, default: '5.3' },
  _type: { type: String, default: 'CommunicationFromPatientToProvider' },

});

module.exports.CommunicationFromPatientToProviderSchema = CommunicationFromPatientToProviderSchema;
module.exports.CommunicationFromPatientToProvider = mongoose.model('CommunicationFromPatientToProvider', CommunicationFromPatientToProviderSchema);
