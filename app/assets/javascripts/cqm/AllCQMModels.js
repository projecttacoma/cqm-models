const mongoose = require('mongoose');
MeasureSchema = require('./Measure.js').MeasureSchema;

module.exports.Measure = mongoose.model('Measure', MeasureSchema);
MeasurePackageSchema = require('./MeasurePackage.js').MeasurePackageSchema;

module.exports.MeasurePackage = mongoose.model('MeasurePackage', MeasurePackageSchema);
StatementDependencySchema = require('./CQLStatementDependency.js').StatementDependencySchema;

module.exports.StatementDependency = mongoose.model('StatementDependency', StatementDependencySchema);
StatementReferenceSchema = require('./CQLStatementDependency.js').StatementReferenceSchema;

module.exports.StatementReference = mongoose.model('StatementReference', StatementReferenceSchema);
CQLLibrarySchema = require('./CQLLibrary.js').CQLLibrarySchema;

module.exports.CQLLibrary = mongoose.model('CQLLibrary', CQLLibrarySchema);
ValueSetSchema = require('./ValueSet.js').ValueSetSchema;

module.exports.ValueSet = mongoose.model('ValueSet', ValueSetSchema);
ConceptSchema = require('./Concept.js').ConceptSchema;

module.exports.Concept = mongoose.model('Concept', ConceptSchema);
PopulationSetSchema = require('./PopulationSet.js').PopulationSetSchema;

module.exports.PopulationSet = mongoose.model('PopulationSet', PopulationSetSchema);
PopulationMapSchema = require('./PopulationSet.js').PopulationMapSchema;

module.exports.PopulationMap = mongoose.model('PopulationMap', PopulationMapSchema);
PatientSchema = require('./Patient.js').PatientSchema;

module.exports.Patient = mongoose.model('Patient', PatientSchema);
