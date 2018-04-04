const mongoose = require('mongoose');
const DataElement = require('./basetypes/DataElement');
const Code = require('./basetypes/Code');
const Interval = require('./basetypes/Interval');
const Quantity = require('./basetypes/Quantity');

const [Number, String, Date] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Date,
];

const CommunicationFromPatientToProviderSchema = DataElement.extendSchema(DataElement.DataElementSchema, {
  author_datetime: Date,
  related_to: [String],
  negation_rationale: Code,
  hqmf_oid: { type: String, default: '2.16.840.1.113883.10.20.28.3.8' },
  category: { type: String, default: 'communication' },
  qdm_status: { type: String, default: 'from_patient_to_provider' },
  qdm_version: { type: String, default: '5.3' },

});

module.exports.CommunicationFromPatientToProviderSchema = CommunicationFromPatientToProviderSchema;
module.exports.CommunicationFromPatientToProvider = mongoose.model('CommunicationFromPatientToProvider', CommunicationFromPatientToProviderSchema);
