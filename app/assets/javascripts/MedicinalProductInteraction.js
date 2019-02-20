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

const MedicinalProductInteractionSchema = DataElementSchema({
  subject: Any,
  description: Any,
  interactant: Any,
  type: Any,
  effect: Any,
  incidence: Any,
  management: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'MedicinalProductInteraction' },

});

module.exports.MedicinalProductInteractionSchema = MedicinalProductInteractionSchema;
module.exports.MedicinalProductInteraction = mongoose.model('MedicinalProductInteraction', MedicinalProductInteractionSchema);
