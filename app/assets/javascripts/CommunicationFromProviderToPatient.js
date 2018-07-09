const mongoose = require('mongoose');
const { DataElementSchema } = require('./basetypes/DataElement');
const Code = require('./basetypes/Code');
const Interval = require('./basetypes/Interval');
const Quantity = require('./basetypes/Quantity');
const DateTime = require('./basetypes/DateTime');
const { ComponentSchema } = require('./Component');
const { FacilityLocationSchema } = require('./FacilityLocation');
const Any = require('./basetypes/Any');

const [Number, String] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
];

const CommunicationFromProviderToPatientSchema = DataElementSchema({
  authorDatetime: DateTime,
  relatedTo: [String],
  negationRationale: Code,
  hqmfOid: { type: String, default: '2.16.840.1.113883.10.20.28.3.9' },
  category: { type: String, default: 'communication' },
  qdmStatus: { type: String, default: 'from_provider_to_patient' },
  qdmVersion: { type: String, default: '5.3' },
  _type: { type: String, default: 'CommunicationFromProviderToPatient' },

});

module.exports.CommunicationFromProviderToPatientSchema = CommunicationFromProviderToPatientSchema;
module.exports.CommunicationFromProviderToPatient = mongoose.model('CommunicationFromProviderToPatient', CommunicationFromProviderToPatientSchema);
