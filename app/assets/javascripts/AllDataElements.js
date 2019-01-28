const mongoose = require('mongoose');
IdSchema = require('./Id.js').IdSchema;

module.exports.Id = mongoose.model('Id', IdSchema);
PhysicalExamOrderSchema = require('./PhysicalExamOrder.js').PhysicalExamOrderSchema;

module.exports.PhysicalExamOrder = mongoose.model('PhysicalExamOrder', PhysicalExamOrderSchema);
ParticipationSchema = require('./Participation.js').ParticipationSchema;

module.exports.Participation = mongoose.model('Participation', ParticipationSchema);
PatientCharacteristicSexSchema = require('./PatientCharacteristicSex.js').PatientCharacteristicSexSchema;

module.exports.PatientCharacteristicSex = mongoose.model('PatientCharacteristicSex', PatientCharacteristicSexSchema);
CareGoalSchema = require('./CareGoal.js').CareGoalSchema;

module.exports.CareGoal = mongoose.model('CareGoal', CareGoalSchema);
PatientCharacteristicSchema = require('./PatientCharacteristic.js').PatientCharacteristicSchema;

module.exports.PatientCharacteristic = mongoose.model('PatientCharacteristic', PatientCharacteristicSchema);
PatientCharacteristicEthnicitySchema = require('./PatientCharacteristicEthnicity.js').PatientCharacteristicEthnicitySchema;

module.exports.PatientCharacteristicEthnicity = mongoose.model('PatientCharacteristicEthnicity', PatientCharacteristicEthnicitySchema);
PatientCharacteristicRaceSchema = require('./PatientCharacteristicRace.js').PatientCharacteristicRaceSchema;

module.exports.PatientCharacteristicRace = mongoose.model('PatientCharacteristicRace', PatientCharacteristicRaceSchema);
LaboratoryTestPerformedSchema = require('./LaboratoryTestPerformed.js').LaboratoryTestPerformedSchema;

module.exports.LaboratoryTestPerformed = mongoose.model('LaboratoryTestPerformed', LaboratoryTestPerformedSchema);
SymptomSchema = require('./Symptom.js').SymptomSchema;

module.exports.Symptom = mongoose.model('Symptom', SymptomSchema);
MedicationAdministeredSchema = require('./MedicationAdministered.js').MedicationAdministeredSchema;

module.exports.MedicationAdministered = mongoose.model('MedicationAdministered', MedicationAdministeredSchema);
ProcedureRecommendedSchema = require('./ProcedureRecommended.js').ProcedureRecommendedSchema;

module.exports.ProcedureRecommended = mongoose.model('ProcedureRecommended', ProcedureRecommendedSchema);
EncounterPerformedSchema = require('./EncounterPerformed.js').EncounterPerformedSchema;

module.exports.EncounterPerformed = mongoose.model('EncounterPerformed', EncounterPerformedSchema);
DiagnosisSchema = require('./Diagnosis.js').DiagnosisSchema;

module.exports.Diagnosis = mongoose.model('Diagnosis', DiagnosisSchema);
CommunicationPerformedSchema = require('./CommunicationPerformed.js').CommunicationPerformedSchema;

module.exports.CommunicationPerformed = mongoose.model('CommunicationPerformed', CommunicationPerformedSchema);
AssessmentPerformedSchema = require('./AssessmentPerformed.js').AssessmentPerformedSchema;

module.exports.AssessmentPerformed = mongoose.model('AssessmentPerformed', AssessmentPerformedSchema);
PatientCharacteristicClinicalTrialParticipantSchema = require('./PatientCharacteristicClinicalTrialParticipant.js').PatientCharacteristicClinicalTrialParticipantSchema;

module.exports.PatientCharacteristicClinicalTrialParticipant = mongoose.model('PatientCharacteristicClinicalTrialParticipant', PatientCharacteristicClinicalTrialParticipantSchema);
DeviceOrderSchema = require('./DeviceOrder.js').DeviceOrderSchema;

module.exports.DeviceOrder = mongoose.model('DeviceOrder', DeviceOrderSchema);
DiagnosticStudyPerformedSchema = require('./DiagnosticStudyPerformed.js').DiagnosticStudyPerformedSchema;

module.exports.DiagnosticStudyPerformed = mongoose.model('DiagnosticStudyPerformed', DiagnosticStudyPerformedSchema);
InterventionOrderSchema = require('./InterventionOrder.js').InterventionOrderSchema;

module.exports.InterventionOrder = mongoose.model('InterventionOrder', InterventionOrderSchema);
FamilyHistorySchema = require('./FamilyHistory.js').FamilyHistorySchema;

module.exports.FamilyHistory = mongoose.model('FamilyHistory', FamilyHistorySchema);
ComponentSchema = require('./Component.js').ComponentSchema;

module.exports.Component = mongoose.model('Component', ComponentSchema);
ResultComponentSchema = require('./ResultComponent.js').ResultComponentSchema;

module.exports.ResultComponent = mongoose.model('ResultComponent', ResultComponentSchema);
FacilityLocationSchema = require('./FacilityLocation.js').FacilityLocationSchema;

module.exports.FacilityLocation = mongoose.model('FacilityLocation', FacilityLocationSchema);
MedicationActiveSchema = require('./MedicationActive.js').MedicationActiveSchema;

module.exports.MedicationActive = mongoose.model('MedicationActive', MedicationActiveSchema);
LaboratoryTestOrderSchema = require('./LaboratoryTestOrder.js').LaboratoryTestOrderSchema;

module.exports.LaboratoryTestOrder = mongoose.model('LaboratoryTestOrder', LaboratoryTestOrderSchema);
DiagnosticStudyOrderSchema = require('./DiagnosticStudyOrder.js').DiagnosticStudyOrderSchema;

module.exports.DiagnosticStudyOrder = mongoose.model('DiagnosticStudyOrder', DiagnosticStudyOrderSchema);
SubstanceOrderSchema = require('./SubstanceOrder.js').SubstanceOrderSchema;

module.exports.SubstanceOrder = mongoose.model('SubstanceOrder', SubstanceOrderSchema);
PatientCharacteristicPayerSchema = require('./PatientCharacteristicPayer.js').PatientCharacteristicPayerSchema;

module.exports.PatientCharacteristicPayer = mongoose.model('PatientCharacteristicPayer', PatientCharacteristicPayerSchema);
PatientCharacteristicExpiredSchema = require('./PatientCharacteristicExpired.js').PatientCharacteristicExpiredSchema;

module.exports.PatientCharacteristicExpired = mongoose.model('PatientCharacteristicExpired', PatientCharacteristicExpiredSchema);
AssessmentOrderSchema = require('./AssessmentOrder.js').AssessmentOrderSchema;

module.exports.AssessmentOrder = mongoose.model('AssessmentOrder', AssessmentOrderSchema);
AssessmentRecommendedSchema = require('./AssessmentRecommended.js').AssessmentRecommendedSchema;

module.exports.AssessmentRecommended = mongoose.model('AssessmentRecommended', AssessmentRecommendedSchema);
ImmunizationAdministeredSchema = require('./ImmunizationAdministered.js').ImmunizationAdministeredSchema;

module.exports.ImmunizationAdministered = mongoose.model('ImmunizationAdministered', ImmunizationAdministeredSchema);
SubstanceAdministeredSchema = require('./SubstanceAdministered.js').SubstanceAdministeredSchema;

module.exports.SubstanceAdministered = mongoose.model('SubstanceAdministered', SubstanceAdministeredSchema);
EncounterOrderSchema = require('./EncounterOrder.js').EncounterOrderSchema;

module.exports.EncounterOrder = mongoose.model('EncounterOrder', EncounterOrderSchema);
EncounterRecommendedSchema = require('./EncounterRecommended.js').EncounterRecommendedSchema;

module.exports.EncounterRecommended = mongoose.model('EncounterRecommended', EncounterRecommendedSchema);
ProcedurePerformedSchema = require('./ProcedurePerformed.js').ProcedurePerformedSchema;

module.exports.ProcedurePerformed = mongoose.model('ProcedurePerformed', ProcedurePerformedSchema);
AllergyIntoleranceSchema = require('./AllergyIntolerance.js').AllergyIntoleranceSchema;

module.exports.AllergyIntolerance = mongoose.model('AllergyIntolerance', AllergyIntoleranceSchema);
ProviderCharacteristicSchema = require('./ProviderCharacteristic.js').ProviderCharacteristicSchema;

module.exports.ProviderCharacteristic = mongoose.model('ProviderCharacteristic', ProviderCharacteristicSchema);
PhysicalExamRecommendedSchema = require('./PhysicalExamRecommended.js').PhysicalExamRecommendedSchema;

module.exports.PhysicalExamRecommended = mongoose.model('PhysicalExamRecommended', PhysicalExamRecommendedSchema);
PatientCharacteristicBirthdateSchema = require('./PatientCharacteristicBirthdate.js').PatientCharacteristicBirthdateSchema;

module.exports.PatientCharacteristicBirthdate = mongoose.model('PatientCharacteristicBirthdate', PatientCharacteristicBirthdateSchema);
AdverseEventSchema = require('./AdverseEvent.js').AdverseEventSchema;

module.exports.AdverseEvent = mongoose.model('AdverseEvent', AdverseEventSchema);
DeviceRecommendedSchema = require('./DeviceRecommended.js').DeviceRecommendedSchema;

module.exports.DeviceRecommended = mongoose.model('DeviceRecommended', DeviceRecommendedSchema);
DeviceAppliedSchema = require('./DeviceApplied.js').DeviceAppliedSchema;

module.exports.DeviceApplied = mongoose.model('DeviceApplied', DeviceAppliedSchema);
MedicationDischargeSchema = require('./MedicationDischarge.js').MedicationDischargeSchema;

module.exports.MedicationDischarge = mongoose.model('MedicationDischarge', MedicationDischargeSchema);
InterventionPerformedSchema = require('./InterventionPerformed.js').InterventionPerformedSchema;

module.exports.InterventionPerformed = mongoose.model('InterventionPerformed', InterventionPerformedSchema);
LaboratoryTestRecommendedSchema = require('./LaboratoryTestRecommended.js').LaboratoryTestRecommendedSchema;

module.exports.LaboratoryTestRecommended = mongoose.model('LaboratoryTestRecommended', LaboratoryTestRecommendedSchema);
MedicationDispensedSchema = require('./MedicationDispensed.js').MedicationDispensedSchema;

module.exports.MedicationDispensed = mongoose.model('MedicationDispensed', MedicationDispensedSchema);
DiagnosticStudyRecommendedSchema = require('./DiagnosticStudyRecommended.js').DiagnosticStudyRecommendedSchema;

module.exports.DiagnosticStudyRecommended = mongoose.model('DiagnosticStudyRecommended', DiagnosticStudyRecommendedSchema);
ImmunizationOrderSchema = require('./ImmunizationOrder.js').ImmunizationOrderSchema;

module.exports.ImmunizationOrder = mongoose.model('ImmunizationOrder', ImmunizationOrderSchema);
PatientCareExperienceSchema = require('./PatientCareExperience.js').PatientCareExperienceSchema;

module.exports.PatientCareExperience = mongoose.model('PatientCareExperience', PatientCareExperienceSchema);
ProviderCareExperienceSchema = require('./ProviderCareExperience.js').ProviderCareExperienceSchema;

module.exports.ProviderCareExperience = mongoose.model('ProviderCareExperience', ProviderCareExperienceSchema);
ProcedureOrderSchema = require('./ProcedureOrder.js').ProcedureOrderSchema;

module.exports.ProcedureOrder = mongoose.model('ProcedureOrder', ProcedureOrderSchema);
MedicationOrderSchema = require('./MedicationOrder.js').MedicationOrderSchema;

module.exports.MedicationOrder = mongoose.model('MedicationOrder', MedicationOrderSchema);
SubstanceRecommendedSchema = require('./SubstanceRecommended.js').SubstanceRecommendedSchema;

module.exports.SubstanceRecommended = mongoose.model('SubstanceRecommended', SubstanceRecommendedSchema);
InterventionRecommendedSchema = require('./InterventionRecommended.js').InterventionRecommendedSchema;

module.exports.InterventionRecommended = mongoose.model('InterventionRecommended', InterventionRecommendedSchema);
PhysicalExamPerformedSchema = require('./PhysicalExamPerformed.js').PhysicalExamPerformedSchema;

module.exports.PhysicalExamPerformed = mongoose.model('PhysicalExamPerformed', PhysicalExamPerformedSchema);
