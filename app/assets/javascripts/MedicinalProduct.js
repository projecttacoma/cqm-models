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

const MedicinalProductSchema = DataElementSchema({
  identifier: Any,
  type: Any,
  domain: Any,
  combinedPharmaceuticalDoseForm: Any,
  legalStatusOfSupply: Any,
  additionalMonitoringIndicator: Any,
  specialMeasures: Any,
  paediatricUseIndicator: Any,
  productClassification: Any,
  marketingStatus: Any,
  pharmaceuticalProduct: Any,
  packagedMedicinalProduct: Any,
  attachedDocument: Any,
  masterFile: Any,
  contact: Any,
  clinicalTrial: Any,
  name: Any,
  crossReference: Any,
  manufacturingBusinessOperation: Any,
  specialDesignation: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'MedicinalProduct' },

});

module.exports.MedicinalProductSchema = MedicinalProductSchema;
module.exports.MedicinalProduct = mongoose.model('MedicinalProduct', MedicinalProductSchema);
