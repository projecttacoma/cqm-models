const mongoose = require('mongoose');

const { ConceptSchema } = require('./Concept.js');
const { CQLLibrarySchema } = require('./CQLLibrary.js');
const { MeasureSchema } = require('./Measure.js');
const { MeasurePackageSchema } = require('./MeasurePackage.js');
const { PatientSchema } = require('./Patient.js');
const { PopulationMapSchema } = require('./PopulationSet.js');
const { PopulationSetSchema } = require('./PopulationSet.js');
const { StatementDependencySchema } = require('./CQLStatementDependency.js');
const { StatementReferenceSchema } = require('./CQLStatementDependency.js');
const { ValueSetSchema } = require('./ValueSet.js');

module.exports.ConceptSchema = ConceptSchema;
module.exports.CQLLibrarySchema = CQLLibrarySchema;
module.exports.MeasureSchema = MeasureSchema;
module.exports.MeasurePackageSchema = MeasurePackageSchema;
module.exports.PatientSchema = PatientSchema;
module.exports.PopulationMapSchema = PopulationMapSchema;
module.exports.PopulationSetSchema = PopulationSetSchema;
module.exports.StatementDependencySchema = StatementDependencySchema;
module.exports.StatementReferenceSchema = StatementReferenceSchema;
module.exports.ValueSetSchema = ValueSetSchema;

module.exports.Concept = mongoose.model('Concept', ConceptSchema);
module.exports.CQLLibrary = mongoose.model('CQLLibrary', CQLLibrarySchema);
module.exports.Measure = mongoose.model('Measure', MeasureSchema);
module.exports.MeasurePackage = mongoose.model('MeasurePackage', MeasurePackageSchema);
module.exports.Patient = mongoose.model('Patient', PatientSchema);
module.exports.PopulationMap = mongoose.model('PopulationMap', PopulationMapSchema);
module.exports.PopulationSet = mongoose.model('PopulationSet', PopulationSetSchema);
module.exports.StatementDependency = mongoose.model('StatementDependency', StatementDependencySchema);
module.exports.StatementReference = mongoose.model('StatementReference', StatementReferenceSchema);
module.exports.ValueSet = mongoose.model('ValueSet', ValueSetSchema);
