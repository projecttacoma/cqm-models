const mongoose = require('mongoose');

module.exports.IdSchema = IdSchema = require('./Id.js').IdSchema;
module.exports.Id = mongoose.model('Id', IdSchema);

module.exports.PhysicalExamOrderSchema = PhysicalExamOrderSchema = require('./PhysicalExamOrder.js').PhysicalExamOrderSchema;
module.exports.PhysicalExamOrder = mongoose.model('PhysicalExamOrder', PhysicalExamOrderSchema);

module.exports.ParticipationSchema = ParticipationSchema = require('./Participation.js').ParticipationSchema;
module.exports.Participation = mongoose.model('Participation', ParticipationSchema);

module.exports.PatientCharacteristicSexSchema = PatientCharacteristicSexSchema = require('./PatientCharacteristicSex.js').PatientCharacteristicSexSchema;
module.exports.PatientCharacteristicSex = mongoose.model('PatientCharacteristicSex', PatientCharacteristicSexSchema);

module.exports.CareGoalSchema = CareGoalSchema = require('./CareGoal.js').CareGoalSchema;
module.exports.CareGoal = mongoose.model('CareGoal', CareGoalSchema);

module.exports.PatientCharacteristicSchema = PatientCharacteristicSchema = require('./PatientCharacteristic.js').PatientCharacteristicSchema;
module.exports.PatientCharacteristic = mongoose.model('PatientCharacteristic', PatientCharacteristicSchema);

module.exports.PatientCharacteristicEthnicitySchema = PatientCharacteristicEthnicitySchema = require('./PatientCharacteristicEthnicity.js').PatientCharacteristicEthnicitySchema;
module.exports.PatientCharacteristicEthnicity = mongoose.model('PatientCharacteristicEthnicity', PatientCharacteristicEthnicitySchema);

module.exports.PatientCharacteristicRaceSchema = PatientCharacteristicRaceSchema = require('./PatientCharacteristicRace.js').PatientCharacteristicRaceSchema;
module.exports.PatientCharacteristicRace = mongoose.model('PatientCharacteristicRace', PatientCharacteristicRaceSchema);

module.exports.LaboratoryTestPerformedSchema = LaboratoryTestPerformedSchema = require('./LaboratoryTestPerformed.js').LaboratoryTestPerformedSchema;
module.exports.LaboratoryTestPerformed = mongoose.model('LaboratoryTestPerformed', LaboratoryTestPerformedSchema);

module.exports.SymptomSchema = SymptomSchema = require('./Symptom.js').SymptomSchema;
module.exports.Symptom = mongoose.model('Symptom', SymptomSchema);

module.exports.MedicationAdministeredSchema = MedicationAdministeredSchema = require('./MedicationAdministered.js').MedicationAdministeredSchema;
module.exports.MedicationAdministered = mongoose.model('MedicationAdministered', MedicationAdministeredSchema);

module.exports.ProcedureRecommendedSchema = ProcedureRecommendedSchema = require('./ProcedureRecommended.js').ProcedureRecommendedSchema;
module.exports.ProcedureRecommended = mongoose.model('ProcedureRecommended', ProcedureRecommendedSchema);

module.exports.EncounterPerformedSchema = EncounterPerformedSchema = require('./EncounterPerformed.js').EncounterPerformedSchema;
module.exports.EncounterPerformed = mongoose.model('EncounterPerformed', EncounterPerformedSchema);

module.exports.DiagnosisSchema = DiagnosisSchema = require('./Diagnosis.js').DiagnosisSchema;
module.exports.Diagnosis = mongoose.model('Diagnosis', DiagnosisSchema);

module.exports.CommunicationPerformedSchema = CommunicationPerformedSchema = require('./CommunicationPerformed.js').CommunicationPerformedSchema;
module.exports.CommunicationPerformed = mongoose.model('CommunicationPerformed', CommunicationPerformedSchema);

module.exports.AssessmentPerformedSchema = AssessmentPerformedSchema = require('./AssessmentPerformed.js').AssessmentPerformedSchema;
module.exports.AssessmentPerformed = mongoose.model('AssessmentPerformed', AssessmentPerformedSchema);

module.exports.PatientCharacteristicClinicalTrialParticipantSchema = PatientCharacteristicClinicalTrialParticipantSchema = require('./PatientCharacteristicClinicalTrialParticipant.js').PatientCharacteristicClinicalTrialParticipantSchema;
module.exports.PatientCharacteristicClinicalTrialParticipant = mongoose.model('PatientCharacteristicClinicalTrialParticipant', PatientCharacteristicClinicalTrialParticipantSchema);

module.exports.DeviceOrderSchema = DeviceOrderSchema = require('./DeviceOrder.js').DeviceOrderSchema;
module.exports.DeviceOrder = mongoose.model('DeviceOrder', DeviceOrderSchema);

module.exports.DiagnosticStudyPerformedSchema = DiagnosticStudyPerformedSchema = require('./DiagnosticStudyPerformed.js').DiagnosticStudyPerformedSchema;
module.exports.DiagnosticStudyPerformed = mongoose.model('DiagnosticStudyPerformed', DiagnosticStudyPerformedSchema);

module.exports.InterventionOrderSchema = InterventionOrderSchema = require('./InterventionOrder.js').InterventionOrderSchema;
module.exports.InterventionOrder = mongoose.model('InterventionOrder', InterventionOrderSchema);

module.exports.FamilyHistorySchema = FamilyHistorySchema = require('./FamilyHistory.js').FamilyHistorySchema;
module.exports.FamilyHistory = mongoose.model('FamilyHistory', FamilyHistorySchema);

module.exports.ComponentSchema = ComponentSchema = require('./Component.js').ComponentSchema;
module.exports.Component = mongoose.model('Component', ComponentSchema);

module.exports.ResultComponentSchema = ResultComponentSchema = require('./ResultComponent.js').ResultComponentSchema;
module.exports.ResultComponent = mongoose.model('ResultComponent', ResultComponentSchema);

module.exports.FacilityLocationSchema = FacilityLocationSchema = require('./FacilityLocation.js').FacilityLocationSchema;
module.exports.FacilityLocation = mongoose.model('FacilityLocation', FacilityLocationSchema);

module.exports.MedicationActiveSchema = MedicationActiveSchema = require('./MedicationActive.js').MedicationActiveSchema;
module.exports.MedicationActive = mongoose.model('MedicationActive', MedicationActiveSchema);

module.exports.LaboratoryTestOrderSchema = LaboratoryTestOrderSchema = require('./LaboratoryTestOrder.js').LaboratoryTestOrderSchema;
module.exports.LaboratoryTestOrder = mongoose.model('LaboratoryTestOrder', LaboratoryTestOrderSchema);

module.exports.DiagnosticStudyOrderSchema = DiagnosticStudyOrderSchema = require('./DiagnosticStudyOrder.js').DiagnosticStudyOrderSchema;
module.exports.DiagnosticStudyOrder = mongoose.model('DiagnosticStudyOrder', DiagnosticStudyOrderSchema);

module.exports.SubstanceOrderSchema = SubstanceOrderSchema = require('./SubstanceOrder.js').SubstanceOrderSchema;
module.exports.SubstanceOrder = mongoose.model('SubstanceOrder', SubstanceOrderSchema);

module.exports.PatientCharacteristicPayerSchema = PatientCharacteristicPayerSchema = require('./PatientCharacteristicPayer.js').PatientCharacteristicPayerSchema;
module.exports.PatientCharacteristicPayer = mongoose.model('PatientCharacteristicPayer', PatientCharacteristicPayerSchema);

module.exports.PatientCharacteristicExpiredSchema = PatientCharacteristicExpiredSchema = require('./PatientCharacteristicExpired.js').PatientCharacteristicExpiredSchema;
module.exports.PatientCharacteristicExpired = mongoose.model('PatientCharacteristicExpired', PatientCharacteristicExpiredSchema);

module.exports.AssessmentOrderSchema = AssessmentOrderSchema = require('./AssessmentOrder.js').AssessmentOrderSchema;
module.exports.AssessmentOrder = mongoose.model('AssessmentOrder', AssessmentOrderSchema);

module.exports.AssessmentRecommendedSchema = AssessmentRecommendedSchema = require('./AssessmentRecommended.js').AssessmentRecommendedSchema;
module.exports.AssessmentRecommended = mongoose.model('AssessmentRecommended', AssessmentRecommendedSchema);

module.exports.ImmunizationAdministeredSchema = ImmunizationAdministeredSchema = require('./ImmunizationAdministered.js').ImmunizationAdministeredSchema;
module.exports.ImmunizationAdministered = mongoose.model('ImmunizationAdministered', ImmunizationAdministeredSchema);

module.exports.SubstanceAdministeredSchema = SubstanceAdministeredSchema = require('./SubstanceAdministered.js').SubstanceAdministeredSchema;
module.exports.SubstanceAdministered = mongoose.model('SubstanceAdministered', SubstanceAdministeredSchema);

module.exports.EncounterOrderSchema = EncounterOrderSchema = require('./EncounterOrder.js').EncounterOrderSchema;
module.exports.EncounterOrder = mongoose.model('EncounterOrder', EncounterOrderSchema);

module.exports.EncounterRecommendedSchema = EncounterRecommendedSchema = require('./EncounterRecommended.js').EncounterRecommendedSchema;
module.exports.EncounterRecommended = mongoose.model('EncounterRecommended', EncounterRecommendedSchema);

module.exports.ProcedurePerformedSchema = ProcedurePerformedSchema = require('./ProcedurePerformed.js').ProcedurePerformedSchema;
module.exports.ProcedurePerformed = mongoose.model('ProcedurePerformed', ProcedurePerformedSchema);

module.exports.AllergyIntoleranceSchema = AllergyIntoleranceSchema = require('./AllergyIntolerance.js').AllergyIntoleranceSchema;
module.exports.AllergyIntolerance = mongoose.model('AllergyIntolerance', AllergyIntoleranceSchema);

module.exports.ProviderCharacteristicSchema = ProviderCharacteristicSchema = require('./ProviderCharacteristic.js').ProviderCharacteristicSchema;
module.exports.ProviderCharacteristic = mongoose.model('ProviderCharacteristic', ProviderCharacteristicSchema);

module.exports.PhysicalExamRecommendedSchema = PhysicalExamRecommendedSchema = require('./PhysicalExamRecommended.js').PhysicalExamRecommendedSchema;
module.exports.PhysicalExamRecommended = mongoose.model('PhysicalExamRecommended', PhysicalExamRecommendedSchema);

module.exports.PatientCharacteristicBirthdateSchema = PatientCharacteristicBirthdateSchema = require('./PatientCharacteristicBirthdate.js').PatientCharacteristicBirthdateSchema;
module.exports.PatientCharacteristicBirthdate = mongoose.model('PatientCharacteristicBirthdate', PatientCharacteristicBirthdateSchema);

module.exports.AdverseEventSchema = AdverseEventSchema = require('./AdverseEvent.js').AdverseEventSchema;
module.exports.AdverseEvent = mongoose.model('AdverseEvent', AdverseEventSchema);

module.exports.DeviceRecommendedSchema = DeviceRecommendedSchema = require('./DeviceRecommended.js').DeviceRecommendedSchema;
module.exports.DeviceRecommended = mongoose.model('DeviceRecommended', DeviceRecommendedSchema);

module.exports.DeviceAppliedSchema = DeviceAppliedSchema = require('./DeviceApplied.js').DeviceAppliedSchema;
module.exports.DeviceApplied = mongoose.model('DeviceApplied', DeviceAppliedSchema);

module.exports.MedicationDischargeSchema = MedicationDischargeSchema = require('./MedicationDischarge.js').MedicationDischargeSchema;
module.exports.MedicationDischarge = mongoose.model('MedicationDischarge', MedicationDischargeSchema);

module.exports.InterventionPerformedSchema = InterventionPerformedSchema = require('./InterventionPerformed.js').InterventionPerformedSchema;
module.exports.InterventionPerformed = mongoose.model('InterventionPerformed', InterventionPerformedSchema);

module.exports.LaboratoryTestRecommendedSchema = LaboratoryTestRecommendedSchema = require('./LaboratoryTestRecommended.js').LaboratoryTestRecommendedSchema;
module.exports.LaboratoryTestRecommended = mongoose.model('LaboratoryTestRecommended', LaboratoryTestRecommendedSchema);

module.exports.MedicationDispensedSchema = MedicationDispensedSchema = require('./MedicationDispensed.js').MedicationDispensedSchema;
module.exports.MedicationDispensed = mongoose.model('MedicationDispensed', MedicationDispensedSchema);

module.exports.DiagnosticStudyRecommendedSchema = DiagnosticStudyRecommendedSchema = require('./DiagnosticStudyRecommended.js').DiagnosticStudyRecommendedSchema;
module.exports.DiagnosticStudyRecommended = mongoose.model('DiagnosticStudyRecommended', DiagnosticStudyRecommendedSchema);

module.exports.ImmunizationOrderSchema = ImmunizationOrderSchema = require('./ImmunizationOrder.js').ImmunizationOrderSchema;
module.exports.ImmunizationOrder = mongoose.model('ImmunizationOrder', ImmunizationOrderSchema);

module.exports.PatientCareExperienceSchema = PatientCareExperienceSchema = require('./PatientCareExperience.js').PatientCareExperienceSchema;
module.exports.PatientCareExperience = mongoose.model('PatientCareExperience', PatientCareExperienceSchema);

module.exports.ProviderCareExperienceSchema = ProviderCareExperienceSchema = require('./ProviderCareExperience.js').ProviderCareExperienceSchema;
module.exports.ProviderCareExperience = mongoose.model('ProviderCareExperience', ProviderCareExperienceSchema);

module.exports.ProcedureOrderSchema = ProcedureOrderSchema = require('./ProcedureOrder.js').ProcedureOrderSchema;
module.exports.ProcedureOrder = mongoose.model('ProcedureOrder', ProcedureOrderSchema);

module.exports.MedicationOrderSchema = MedicationOrderSchema = require('./MedicationOrder.js').MedicationOrderSchema;
module.exports.MedicationOrder = mongoose.model('MedicationOrder', MedicationOrderSchema);

module.exports.SubstanceRecommendedSchema = SubstanceRecommendedSchema = require('./SubstanceRecommended.js').SubstanceRecommendedSchema;
module.exports.SubstanceRecommended = mongoose.model('SubstanceRecommended', SubstanceRecommendedSchema);

module.exports.InterventionRecommendedSchema = InterventionRecommendedSchema = require('./InterventionRecommended.js').InterventionRecommendedSchema;
module.exports.InterventionRecommended = mongoose.model('InterventionRecommended', InterventionRecommendedSchema);

module.exports.PhysicalExamPerformedSchema = PhysicalExamPerformedSchema = require('./PhysicalExamPerformed.js').PhysicalExamPerformedSchema;
module.exports.PhysicalExamPerformed = mongoose.model('PhysicalExamPerformed', PhysicalExamPerformedSchema);

module.exports.QDMPatientSchema = QDMPatientSchema = require('./QDMPatient.js').QDMPatientSchema;
// module.exports.QDMPatient = mongoose.model('QDMPatient', QDMPatientSchema);
