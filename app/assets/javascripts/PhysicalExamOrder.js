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

const PhysicalExamOrderSchema = DataElementSchema({
  authorDatetime: DateTime,
  reason: Code,
  anatomicalLocationSite: Code,
  negationRationale: Code,
  requester: Any,
  qdmTitle: { type: String, default: 'Physical Exam, Order' },
  hqmfOid: { type: String, default: '2.16.840.1.113883.10.20.28.4.61' },
  qdmCategory: { type: String, default: 'physical_exam' },
  qdmStatus: { type: String, default: 'order' },
  qdmVersion: { type: String, default: '5.5' },
  _type: { type: String, default: 'QDM::PhysicalExamOrder' },

});

module.exports.PhysicalExamOrderSchema = PhysicalExamOrderSchema;
class PhysicalExamOrder extends mongoose.Document {
  constructor(object) {
    super(object, PhysicalExamOrderSchema);
    this._type = 'QDM::PhysicalExamOrder';
  }
}

module.exports.PhysicalExamOrder = PhysicalExamOrder;

