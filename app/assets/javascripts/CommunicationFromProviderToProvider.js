const mongoose = require('mongoose');
const DataElement = require('./basetypes/DataElement');
const Code = require('./basetypes/Code');
const Interval = require('./basetypes/Interval');
const Quantity = require('./basetypes/Quantity');

const [Integer, Array, String, Float, Time] = [
  mongoose.Schema.Types.Integer,
  mongoose.Schema.Types.Array,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Float,
  mongoose.Schema.Types.Time,
];

const CommunicationFromProviderToProviderSchema = DataElement.extendSchema(DataElement.DataElementSchema, {
  author_datetime: Date,
  related_to: [String],
  negation_rationale: Code,
  hqmf_oid: { type: String, default: '2.16.840.1.113883.10.20.28.3.10' },
  category: { type: String, default: 'communication' },
  qdm_status: { type: String, default: 'from_provider_to_provider' },
  qdm_version: { type: String, default: '5.3' },

});

module.exports.CommunicationFromProviderToProviderSchema = CommunicationFromProviderToProviderSchema;
module.exports.CommunicationFromProviderToProvider = mongoose.model('CommunicationFromProviderToProvider', CommunicationFromProviderToProviderSchema);
