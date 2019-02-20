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

const SpecimenSchema = DataElementSchema({
  identifier: Any,
  accessionIdentifier: Any,
  status: Any,
  type: Any,
  subject: Any,
  receivedTime: Any,
  parent: Any,
  request: Any,
  collection: Any,
  processing: Any,
  container: Any,
  condition: Any,
  note: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'Specimen' },

});

module.exports.SpecimenSchema = SpecimenSchema;
module.exports.Specimen = mongoose.model('Specimen', SpecimenSchema);
