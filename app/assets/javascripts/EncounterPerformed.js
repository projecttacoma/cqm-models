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
const { DiagnosisComponentSchema } = require('./attributes/DiagnosisComponent');

const [Number, String] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
];

const EncounterPerformedSchema = DataElementSchema({
  authorDatetime: DateTime,
  admissionSource: Code,
  class: Code,
  relevantPeriod: Interval,
  dischargeDisposition: Code,
  facilityLocations: [FacilityLocationSchema],
  diagnoses: [DiagnosisComponentSchema],
  lengthOfStay: Quantity,
  priority: Code,
  participant: [AnyEntity],
  relatedTo: [String],
  qdmTitle: { type: String, default: 'Encounter, Performed' },
  hqmfOid: { type: String, default: '2.16.840.1.113883.10.20.28.4.5' },
  qdmCategory: { type: String, default: 'encounter' },
  qdmStatus: { type: String, default: 'performed' },
  qdmVersion: { type: String, default: '5.6' },
  _type: { type: String, default: 'QDM::EncounterPerformed' },

});

module.exports.EncounterPerformedSchema = EncounterPerformedSchema;
class EncounterPerformed extends mongoose.Document {
  constructor(object) {
    super(object, EncounterPerformedSchema);
    this._type = 'QDM::EncounterPerformed';
    if (object && object.clazz) {
      this.class = object.clazz;
    }
  }
}

module.exports.EncounterPerformed = EncounterPerformed;

