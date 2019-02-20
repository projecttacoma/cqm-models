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

const RouteOfAdministrationSchema = DataElementSchema({
  code: Any,
  firstDose: Any,
  maxSingleDose: Any,
  maxDosePerDay: Any,
  maxDosePerTreatmentPeriod: Any,
  maxTreatmentPeriod: Any,
  targetSpecies: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'RouteOfAdministration' },

});

module.exports.RouteOfAdministrationSchema = RouteOfAdministrationSchema;
module.exports.RouteOfAdministration = mongoose.model('RouteOfAdministration', RouteOfAdministrationSchema);
