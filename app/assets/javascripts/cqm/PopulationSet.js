/* eslint-disable no-unused-vars, no-param-reassign */
const mongoose = require('mongoose/browser');
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
  // STRAT is only here so cqm-execution can handle stratification results compliation with the current approach.
  STRAT: StatementReferenceSchema,
});

if (!PopulationMapSchema.options.toObject) PopulationMapSchema.options.toObject = {};
PopulationMapSchema.options.toObject.transform = function transform(doc, ret, options) {
  // remove the _id and _type of every document before returning the result
  delete ret._id;
  delete ret._type;
  return ret;
};


const StratificationSchema = new mongoose.Schema({
  title: String,
  stratification_id: String,
  hqmf_id: String,
  statement: StatementReferenceSchema,
});

const ObservationSchema = new mongoose.Schema({
  title: String,
  observation_function: StatementReferenceSchema,
  observation_parameter: StatementReferenceSchema,
  aggregation_type: String,
  hqmf_id: String,
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
class Stratification extends mongoose.Document {
  constructor(object) {
    super(object, StratificationSchema);
  }
}
module.exports.Stratification = Stratification;

module.exports.ObservationSchema = ObservationSchema;
class Observation extends mongoose.Document {
  constructor(object) {
    super(object, ObservationSchema);
  }
}
module.exports.Observation = Observation;

module.exports.PopulationMapSchema = PopulationMapSchema;
class PopulationMap extends mongoose.Document {
  constructor(object) {
    super(object, PopulationMapSchema);
  }
}
module.exports.PopulationMap = PopulationMap;

module.exports.PopulationSetSchema = PopulationSetSchema;
class PopulationSet extends mongoose.Document {
  constructor(object) {
    super(object, PopulationSetSchema);
  }
}
module.exports.PopulationSet = PopulationSet;
