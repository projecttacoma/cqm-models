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

const MedicinalProductManufacturedSchema = DataElementSchema({
  manufacturedDoseForm: Any,
  unitOfPresentation: Any,
  quantity: Any,
  manufacturer: Any,
  ingredient: Any,
  physicalCharacteristics: Any,
  otherCharacteristics: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'MedicinalProductManufactured' },

});

module.exports.MedicinalProductManufacturedSchema = MedicinalProductManufacturedSchema;
module.exports.MedicinalProductManufactured = mongoose.model('MedicinalProductManufactured', MedicinalProductManufacturedSchema);
