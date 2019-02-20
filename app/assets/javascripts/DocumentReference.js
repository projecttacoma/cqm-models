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

const DocumentReferenceSchema = DataElementSchema({
  masterIdentifier: Any,
  identifier: Any,
  status: Any,
  docStatus: Any,
  type: Any,
  category: Any,
  subject: Any,
  date: Any,
  author: Any,
  authenticator: Any,
  custodian: Any,
  relatesTo: Any,
  description: Any,
  securityLabel: Any,
  content: Any,
  context: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'DocumentReference' },

});

module.exports.DocumentReferenceSchema = DocumentReferenceSchema;
module.exports.DocumentReference = mongoose.model('DocumentReference', DocumentReferenceSchema);
