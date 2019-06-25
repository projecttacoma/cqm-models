const mongoose = require('mongoose/browser');

const { IdentifierSchema } = require('./Identifier');
const { DataElementSchema } = require('./basetypes/DataElement');
const Code = require('./basetypes/Code');
const Interval = require('./basetypes/Interval');
const Quantity = require('./basetypes/Quantity');
const DateTime = require('./basetypes/DateTime');
const Date = require('./basetypes/Date');
const Any = require('./basetypes/Any');
const { ComponentSchema } = require('./attributes/Component');
const { FacilityLocationSchema } = require('./attributes/FacilityLocation');
const { DiagnosisComponentSchema } = require('./attributes/DiagnosisComponent');

const [Number, String] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
];

const DiagnosticStudyPerformedSchema = DataElementSchema({
  authorDatetime: DateTime,
  relevantDatetime: DateTime,
  relevantPeriod: Interval,
  reason: Code,
  result: Any,
  resultDatetime: DateTime,
  status: Code,
  method: Code,
  facilityLocation: FacilityLocationSchema,
  negationRationale: Code,
  components: [ComponentSchema],
  performer: Any,
  qdmTitle: { type: String, default: 'Diagnostic Study, Performed' },
  hqmfOid: { type: String, default: '2.16.840.1.113883.10.20.28.4.23' },
  qdmCategory: { type: String, default: 'diagnostic_study' },
  qdmStatus: { type: String, default: 'performed' },
  qdmVersion: { type: String, default: '5.5' },
  _type: { type: String, default: 'QDM::DiagnosticStudyPerformed' },

});

module.exports.DiagnosticStudyPerformedSchema = DiagnosticStudyPerformedSchema;
class DiagnosticStudyPerformed extends mongoose.Document {
  constructor(object) {
    super(object, DiagnosticStudyPerformedSchema);
    this._type = 'QDM::DiagnosticStudyPerformed';
  }
}

module.exports.DiagnosticStudyPerformed = DiagnosticStudyPerformed;

