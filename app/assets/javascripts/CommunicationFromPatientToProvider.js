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
  authorDatetime: DateTime,
  relatedTo: [String],
  negationRationale: Code,
  hqmfOid: { type: String, default: '2.16.840.1.113883.10.20.28.3.8' },
  category: { type: String, default: 'communication' },
  qdmStatus: { type: String, default: 'from_patient_to_provider' },
  qdmVersion: { type: String, default: '5.3' },
  _type: { type: String, default: 'CommunicationFromPatientToProvider' },

});

module.exports.CommunicationFromPatientToProviderSchema = CommunicationFromPatientToProviderSchema;
module.exports.CommunicationFromPatientToProvider = mongoose.model('CommunicationFromPatientToProvider', CommunicationFromPatientToProviderSchema);
