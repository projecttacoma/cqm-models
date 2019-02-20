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

const LensSpecificationSchema = DataElementSchema({
  product: Any,
  eye: Any,
  sphere: Any,
  cylinder: Any,
  axis: Any,
  prism: Any,
  add: Any,
  power: Any,
  backCurve: Any,
  diameter: Any,
  duration: Any,
  color: Any,
  brand: Any,
  note: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'LensSpecification' },

});

module.exports.LensSpecificationSchema = LensSpecificationSchema;
module.exports.LensSpecification = mongoose.model('LensSpecification', LensSpecificationSchema);
