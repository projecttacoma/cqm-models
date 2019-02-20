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

const MedicationKnowledgeSchema = DataElementSchema({
  code: Any,
  status: Any,
  manufacturer: Any,
  doseForm: Any,
  amount: Any,
  synonym: Any,
  relatedMedicationKnowledge: Any,
  associatedMedication: Any,
  productType: Any,
  monograph: Any,
  ingredient: Any,
  preparationInstruction: Any,
  intendedRoute: Any,
  cost: Any,
  monitoringProgram: Any,
  administrationGuidelines: Any,
  medicineClassification: Any,
  packaging: Any,
  drugCharacteristic: Any,
  contraindication: Any,
  regulatory: Any,
  kinetics: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'MedicationKnowledge' },

});

module.exports.MedicationKnowledgeSchema = MedicationKnowledgeSchema;
module.exports.MedicationKnowledge = mongoose.model('MedicationKnowledge', MedicationKnowledgeSchema);
