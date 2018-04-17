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

const ProviderCareExperienceSchema = DataElementSchema({
  author_datetime: DateTime,
  hqmf_oid: { type: String, default: '2.16.840.1.113883.10.20.28.3.70' },
  category: { type: String, default: 'care_experience' },
  qdm_version: { type: String, default: '5.3' },
  _type: { type: String, default: 'ProviderCareExperience' },

});

module.exports.ProviderCareExperienceSchema = ProviderCareExperienceSchema;
module.exports.ProviderCareExperience = mongoose.model('ProviderCareExperience', ProviderCareExperienceSchema);
