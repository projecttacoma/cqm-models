const mongoose = require('mongoose');
const { DataElementSchema } = require('./basetypes/DataElement');
const Code = require('./basetypes/Code');
const Interval = require('./basetypes/Interval');
const Quantity = require('./basetypes/Quantity');
const DateTime = require('./basetypes/DateTime');
const { ComponentSchema } = require('./Component');
const { FacilityLocationSchema } = require('./FacilityLocation');
const { IdSchema } = require('./Id');
const Any = require('./basetypes/Any');

const [Number, String] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
];

const InvoiceSchema = DataElementSchema({
  identifier: Any,
  status: Any,
  cancelledReason: Any,
  type: Any,
  subject: Any,
  recipient: Any,
  date: Any,
  participant: Any,
  issuer: Any,
  account: Any,
  lineItem: Any,
  totalPriceComponent: Any,
  totalNet: Any,
  totalGross: Any,
  paymentTerms: Any,
  note: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'Invoice' },

});

module.exports.InvoiceSchema = InvoiceSchema;
module.exports.Invoice = mongoose.model('Invoice', InvoiceSchema);
