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

const PatientCareExperienceSchema = DataElementSchema({
  author_datetime: Date,
  hqmf_oid: { type: String, default: '2.16.840.1.113883.10.20.28.3.52' },
  category: { type: String, default: 'care_experience' },
  qdm_version: { type: String, default: '5.3' },
  _type: { type: String, default: 'PatientCareExperience' },

});

module.exports.PatientCareExperienceSchema = PatientCareExperienceSchema;
module.exports.PatientCareExperience = mongoose.model('PatientCareExperience', PatientCareExperienceSchema);
