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

const DiagnosticStudyOrderSchema = DataElementSchema({
  authorDatetime: DateTime,
  reason: Mixed,
  method: Mixed,
  negationRationale: Mixed,
  hqmfOid: { type: String, default: '2.16.840.1.113883.10.20.28.3.22' },
  category: { type: String, default: 'diagnostic_study' },
  qdmStatus: { type: String, default: 'order' },
  qdmVersion: { type: String, default: '5.3' },
  _type: { type: String, default: 'DiagnosticStudyOrder' },

});

module.exports.DiagnosticStudyOrderSchema = DiagnosticStudyOrderSchema;
module.exports.DiagnosticStudyOrder = mongoose.model('DiagnosticStudyOrder', DiagnosticStudyOrderSchema);
