const mongoose = require('mongoose/browser');

const { IdentifierSchema } = require('./attributes/Identifier');
const { DataElementSchema } = require('./basetypes/DataElement');
const Code = require('./basetypes/Code');
const Interval = require('./basetypes/Interval');
const Quantity = require('./basetypes/Quantity');
const DateTime = require('./basetypes/DateTime');
const QDMDate = require('./basetypes/QDMDate');
const Any = require('./basetypes/Any');
const AnyEntity = require('./basetypes/AnyEntity');
const { ComponentSchema } = require('./attributes/Component');
const { FacilityLocationSchema } = require('./attributes/FacilityLocation');
const { EntitySchema } = require('./attributes/Entity');


const [Number, String] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
];

const PatientCareExperienceSchema = DataElementSchema({
  authorDatetime: DateTime,
  recorder: AnyEntity,
  qdmTitle: { type: String, default: 'Patient Care Experience' },
  hqmfOid: { type: String, default: '2.16.840.1.113883.10.20.28.4.52' },
  qdmCategory: { type: String, default: 'care_experience' },
  qdmVersion: { type: String, default: '5.5' },
  _type: { type: String, default: 'QDM::PatientCareExperience' },

});

module.exports.PatientCareExperienceSchema = PatientCareExperienceSchema;
class PatientCareExperience extends mongoose.Document {
  constructor(object) {
    super(object, PatientCareExperienceSchema);
    this._type = 'QDM::PatientCareExperience';
  }
}

module.exports.PatientCareExperience = PatientCareExperience;

