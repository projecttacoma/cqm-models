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

const MedicinalProductPharmaceuticalSchema = DataElementSchema({
  identifier: Any,
  administrableDoseForm: Any,
  unitOfPresentation: Any,
  ingredient: Any,
  device: Any,
  characteristics: Any,
  routeOfAdministration: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'MedicinalProductPharmaceutical' },

});

module.exports.MedicinalProductPharmaceuticalSchema = MedicinalProductPharmaceuticalSchema;
module.exports.MedicinalProductPharmaceutical = mongoose.model('MedicinalProductPharmaceutical', MedicinalProductPharmaceuticalSchema);
