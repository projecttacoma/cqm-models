const mongoose = require('mongoose/browser');

const { IdSchema } = require('./Id');
const { DataElementSchema } = require('./basetypes/DataElement');
const Code = require('./basetypes/Code');
const Interval = require('./basetypes/Interval');
const Quantity = require('./basetypes/Quantity');
const DateTime = require('./basetypes/DateTime');
const Any = require('./basetypes/Any');
const { ComponentSchema } = require('./attributes/Component');
const { FacilityLocationSchema } = require('./attributes/FacilityLocation');


const [Number, String] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
];

const DiagnosticStudyPerformedSchema = DataElementSchema({
  authorDatetime: DateTime,
  relevantPeriod: Interval,
  reason: Code,
  result: Any,
  resultDatetime: DateTime,
  status: Code,
  method: Code,
  facilityLocation: FacilityLocationSchema,
  negationRationale: Code,
  components: [ComponentSchema],
  qdmTitle: { type: String, default: 'Diagnostic Study, Performed' },
  hqmfOid: { type: String, default: '2.16.840.1.113883.10.20.28.4.23' },
  qdmCategory: { type: String, default: 'diagnostic_study' },
  qdmStatus: { type: String, default: 'performed' },
  qdmVersion: { type: String, default: '5.4' },
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
