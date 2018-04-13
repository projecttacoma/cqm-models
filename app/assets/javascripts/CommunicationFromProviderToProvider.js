const mongoose = require('mongoose');
const { DataElementSchema } = require('./basetypes/DataElement');
const Code = require('./basetypes/Code');
const Interval = require('./basetypes/Interval');
const Quantity = require('./basetypes/Quantity');

const [Number, String, Date] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Date,
];

const CommunicationFromProviderToProviderSchema = DataElementSchema({
  author_datetime: Date,
  related_to: [String],
  negation_rationale: Code,
  hqmf_oid: { type: String, default: '2.16.840.1.113883.10.20.28.3.10' },
  category: { type: String, default: 'communication' },
  qdm_status: { type: String, default: 'from_provider_to_provider' },
  qdm_version: { type: String, default: '5.3' },
  _type: { type: String, default: 'CommunicationFromProviderToProvider' },

});

module.exports.CommunicationFromProviderToProviderSchema = CommunicationFromProviderToProviderSchema;
module.exports.CommunicationFromProviderToProvider = mongoose.model('CommunicationFromProviderToProvider', CommunicationFromProviderToProviderSchema);
