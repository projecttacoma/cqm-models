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

const ImmunizationOrderSchema = DataElementSchema({
  activeDatetime: DateTime,
  authorDatetime: DateTime,
  dosage: Quantity,
  supply: Quantity,
  reason: Code,
  route: Code,
  negationRationale: Code,
  requester: Any,
  qdmTitle: { type: String, default: 'Immunization, Order' },
  hqmfOid: { type: String, default: '2.16.840.1.113883.10.20.28.4.113' },
  qdmCategory: { type: String, default: 'immunization' },
  qdmStatus: { type: String, default: 'order' },
  qdmVersion: { type: String, default: '5.5' },
  _type: { type: String, default: 'QDM::ImmunizationOrder' },

});

module.exports.ImmunizationOrderSchema = ImmunizationOrderSchema;
class ImmunizationOrder extends mongoose.Document {
  constructor(object) {
    super(object, ImmunizationOrderSchema);
    this._type = 'QDM::ImmunizationOrder';
  }
}

module.exports.ImmunizationOrder = ImmunizationOrder;

