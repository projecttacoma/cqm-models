const mongoose = require('mongoose');
const { StatementReferenceSchema } = require('./CQLStatementDependency');

const [Mixed] = [
  mongoose.Schema.Types.Mixed,
];

// TODO: figure out if there is a better way to handle inheritance like mongoid.
//  _type is how mongoid stores the specific type of the embedded document.
const PopulationMapSchema = new mongoose.Schema({
  _type: String,
  IPP: StatementReferenceSchema,
  DENOM: StatementReferenceSchema,
  NUMER: StatementReferenceSchema,
  NUMEX: StatementReferenceSchema,
  DENEX: StatementReferenceSchema,
  DENEXCEP: StatementReferenceSchema,
  MSRPOPL: StatementReferenceSchema,
  MSRPOPLEX: StatementReferenceSchema,
});

const StratificationSchema = new mongoose.Schema({
  title: String,
  stratification_id: String,
  statement: StatementReferenceSchema,
});

const ObservationSchema = new mongoose.Schema({
  title: String,
  observation_function: StatementReferenceSchema,
  observation_parameter: StatementReferenceSchema,
  aggregation_type: String,
});

const PopulationSetSchema = new mongoose.Schema({
  title: String,
  population_set_id: String,
  populations: PopulationMapSchema,
  stratifications: [StratificationSchema],
  supplemental_data_elements: [StatementReferenceSchema],
  observations: [ObservationSchema],
});

module.exports.StratificationSchema = StratificationSchema;
module.exports.stratification = mongoose.model('stratification', StratificationSchema);

module.exports.ObservationSchema = ObservationSchema;
module.exports.Observation = mongoose.model('observation', ObservationSchema);

module.exports.PopulationMapSchema = PopulationMapSchema;
module.exports.PopulationMap = mongoose.model('population_map', PopulationMapSchema);

module.exports.PopulationSetSchema = PopulationSetSchema;
module.exports.PopulationSet = mongoose.model('population_set', PopulationSetSchema);
