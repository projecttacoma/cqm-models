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

const DocumentManifestSchema = DataElementSchema({
  masterIdentifier: Any,
  identifier: Any,
  status: Any,
  type: Any,
  subject: Any,
  created: Any,
  author: Any,
  recipient: Any,
  source: Any,
  description: Any,
  content: Any,
  related: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'DocumentManifest' },

});

module.exports.DocumentManifestSchema = DocumentManifestSchema;
module.exports.DocumentManifest = mongoose.model('DocumentManifest', DocumentManifestSchema);
