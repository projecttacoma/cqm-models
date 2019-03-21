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
const ProcedureOrderSchema = DataElementSchema({
  authorDatetime: DateTime,
  reason: Code,
  anatomicalLocationSite: Code,
  ordinality: Code,
  negationRationale: Code,
  hqmfTitle: { type: String, default: 'Procedure, Order' },
  hqmfOid: { type: String, default: '2.16.840.1.113883.10.20.28.3.66' },
  qdmCategory: { type: String, default: 'procedure' },
  qdmStatus: { type: String, default: 'order' },
  qdmVersion: { type: String, default: '5.4' },
  _type: { type: String, default: 'ProcedureOrder' },

});
module.exports.ProcedureOrderSchema = ProcedureOrderSchema;
class ProcedureOrder extends mongoose.Document {
  constructor(object) {
    super(object, ProcedureOrderSchema);
  }
}
module.exports.ProcedureOrder = ProcedureOrder;
