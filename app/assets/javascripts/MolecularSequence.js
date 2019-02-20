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

const MolecularSequenceSchema = DataElementSchema({
  identifier: Any,
  type: Any,
  coordinateSystem: Any,
  patient: Any,
  specimen: Any,
  device: Any,
  performer: Any,
  quantity: Any,
  referenceSeq: Any,
  variant: Any,
  observedSeq: Any,
  quality: Any,
  readCoverage: Any,
  repository: Any,
  pointer: Any,
  structureVariant: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'MolecularSequence' },

});

module.exports.MolecularSequenceSchema = MolecularSequenceSchema;
module.exports.MolecularSequence = mongoose.model('MolecularSequence', MolecularSequenceSchema);
