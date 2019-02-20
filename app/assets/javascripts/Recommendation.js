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

const RecommendationSchema = DataElementSchema({
  vaccineCode: Any,
  targetDisease: Any,
  contraindicatedVaccineCode: Any,
  forecastStatus: Any,
  forecastReason: Any,
  dateCriterion: Any,
  description: Any,
  series: Any,
  doseNumber: Any,
  seriesDoses: Any,
  supportingImmunization: Any,
  supportingPatientInformation: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'Recommendation' },

});

module.exports.RecommendationSchema = RecommendationSchema;
module.exports.Recommendation = mongoose.model('Recommendation', RecommendationSchema);
