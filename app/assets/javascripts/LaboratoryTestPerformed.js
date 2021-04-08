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

const LaboratoryTestPerformedSchema = DataElementSchema({
  authorDatetime: DateTime,
  relevantDatetime: DateTime,
  relevantPeriod: Interval,
  status: Code,
  method: Code,
  result: Any,
  resultDatetime: DateTime,
  reason: Code,
  referenceRange: Interval,
  interpretation: Code,
  negationRationale: Code,
  components: [ComponentSchema],
  performer: [AnyEntity],
  relatedTo: [String],
  qdmTitle: { type: String, default: 'Laboratory Test, Performed' },
  hqmfOid: { type: String, default: '2.16.840.1.113883.10.20.28.4.42' },
  qdmCategory: { type: String, default: 'laboratory_test' },
  qdmStatus: { type: String, default: 'performed' },
  qdmVersion: { type: String, default: '5.6' },
  _type: { type: String, default: 'QDM::LaboratoryTestPerformed' },

});

module.exports.LaboratoryTestPerformedSchema = LaboratoryTestPerformedSchema;
class LaboratoryTestPerformed extends mongoose.Document {
  constructor(object) {
    super(object, LaboratoryTestPerformedSchema);
    this._type = 'QDM::LaboratoryTestPerformed';
  }
}

module.exports.LaboratoryTestPerformed = LaboratoryTestPerformed;

