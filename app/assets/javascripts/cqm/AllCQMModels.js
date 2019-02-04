const mongoose = require('mongoose');

module.exports.MeasureSchema = MeasureSchema = require('./Measure.js').MeasureSchema;
module.exports.Measure = mongoose.model('Measure', MeasureSchema);

module.exports.MeasurePackageSchema = MeasurePackageSchema = require('./MeasurePackage.js').MeasurePackageSchema;
module.exports.MeasurePackage = mongoose.model('MeasurePackage', MeasurePackageSchema);

module.exports.StatementDependencySchema = StatementDependencySchema = require('./CQLStatementDependency.js').StatementDependencySchema;
module.exports.StatementDependency = mongoose.model('StatementDependency', StatementDependencySchema);

module.exports.StatementReferenceSchema = StatementReferenceSchema = require('./CQLStatementDependency.js').StatementReferenceSchema;
module.exports.StatementReference = mongoose.model('StatementReference', StatementReferenceSchema);

module.exports.CQLLibrarySchema = CQLLibrarySchema = require('./CQLLibrary.js').CQLLibrarySchema;
module.exports.CQLLibrary = mongoose.model('CQLLibrary', CQLLibrarySchema);

module.exports.ValueSetSchema = ValueSetSchema = require('./ValueSet.js').ValueSetSchema;
module.exports.ValueSet = mongoose.model('ValueSet', ValueSetSchema);

module.exports.ConceptSchema = ConceptSchema = require('./Concept.js').ConceptSchema;
module.exports.Concept = mongoose.model('Concept', ConceptSchema);

module.exports.PopulationSetSchema = PopulationSetSchema = require('./PopulationSet.js').PopulationSetSchema;
module.exports.PopulationSet = mongoose.model('PopulationSet', PopulationSetSchema);

module.exports.PopulationMapSchema = PopulationMapSchema = require('./PopulationSet.js').PopulationMapSchema;
module.exports.PopulationMap = mongoose.model('PopulationMap', PopulationMapSchema);

module.exports.PatientSchema = PatientSchema = require('./Patient.js').PatientSchema;
module.exports.Patient = mongoose.model('Patient', PatientSchema);
