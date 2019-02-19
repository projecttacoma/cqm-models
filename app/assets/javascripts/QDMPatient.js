const mongoose = require('mongoose');
const Code = require('./basetypes/Code');
const Interval = require('./basetypes/Interval');
const Quantity = require('./basetypes/Quantity');
const DateTime = require('./basetypes/DateTime');
const AllDataElementSchemas = require('./AllDataElementSchemas');
const IdSchema = require('./Id');
const PhysicalExamOrderSchema = require('./PhysicalExamOrder');
const ParticipationSchema = require('./Participation');
const PatientCharacteristicSexSchema = require('./PatientCharacteristicSex');
const CareGoalSchema = require('./CareGoal');
const PatientCharacteristicSchema = require('./PatientCharacteristic');
const PatientCharacteristicEthnicitySchema = require('./PatientCharacteristicEthnicity');
const PatientCharacteristicRaceSchema = require('./PatientCharacteristicRace');
const LaboratoryTestPerformedSchema = require('./LaboratoryTestPerformed');
const SymptomSchema = require('./Symptom');
const MedicationAdministeredSchema = require('./MedicationAdministered');
const ProcedureRecommendedSchema = require('./ProcedureRecommended');
const EncounterPerformedSchema = require('./EncounterPerformed');
const DiagnosisSchema = require('./Diagnosis');
const CommunicationPerformedSchema = require('./CommunicationPerformed');
const AssessmentPerformedSchema = require('./AssessmentPerformed');
const PatientCharacteristicClinicalTrialParticipantSchema = require('./PatientCharacteristicClinicalTrialParticipant');
const DeviceOrderSchema = require('./DeviceOrder');
const DiagnosticStudyPerformedSchema = require('./DiagnosticStudyPerformed');
const InterventionOrderSchema = require('./InterventionOrder');
const FamilyHistorySchema = require('./FamilyHistory');
const ComponentSchema = require('./Component');
const ResultComponentSchema = require('./ResultComponent');
const FacilityLocationSchema = require('./FacilityLocation');
const MedicationActiveSchema = require('./MedicationActive');
const LaboratoryTestOrderSchema = require('./LaboratoryTestOrder');
const DiagnosticStudyOrderSchema = require('./DiagnosticStudyOrder');
const SubstanceOrderSchema = require('./SubstanceOrder');
const PatientCharacteristicPayerSchema = require('./PatientCharacteristicPayer');
const PatientCharacteristicExpiredSchema = require('./PatientCharacteristicExpired');
const AssessmentOrderSchema = require('./AssessmentOrder');
const AssessmentRecommendedSchema = require('./AssessmentRecommended');
const ImmunizationAdministeredSchema = require('./ImmunizationAdministered');
const SubstanceAdministeredSchema = require('./SubstanceAdministered');
const EncounterOrderSchema = require('./EncounterOrder');
const EncounterRecommendedSchema = require('./EncounterRecommended');
const ProcedurePerformedSchema = require('./ProcedurePerformed');
const AllergyIntoleranceSchema = require('./AllergyIntolerance');
const ProviderCharacteristicSchema = require('./ProviderCharacteristic');
const PhysicalExamRecommendedSchema = require('./PhysicalExamRecommended');
const PatientCharacteristicBirthdateSchema = require('./PatientCharacteristicBirthdate');
const AdverseEventSchema = require('./AdverseEvent');
const DeviceRecommendedSchema = require('./DeviceRecommended');
const DeviceAppliedSchema = require('./DeviceApplied');
const MedicationDischargeSchema = require('./MedicationDischarge');
const InterventionPerformedSchema = require('./InterventionPerformed');
const LaboratoryTestRecommendedSchema = require('./LaboratoryTestRecommended');
const MedicationDispensedSchema = require('./MedicationDispensed');
const DiagnosticStudyRecommendedSchema = require('./DiagnosticStudyRecommended');
const ImmunizationOrderSchema = require('./ImmunizationOrder');
const PatientCareExperienceSchema = require('./PatientCareExperience');
const ProviderCareExperienceSchema = require('./ProviderCareExperience');
const ProcedureOrderSchema = require('./ProcedureOrder');
const MedicationOrderSchema = require('./MedicationOrder');
const SubstanceRecommendedSchema = require('./SubstanceRecommended');
const InterventionRecommendedSchema = require('./InterventionRecommended');
const PhysicalExamPerformedSchema = require('./PhysicalExamPerformed');

const [Schema, Number, String, Mixed] = [
  mongoose.Schema,
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Mixed,
];

const QDMPatientSchema = new Schema({
  birthDatetime: DateTime,
  qdmVersion: { type: String, default: '5.4' },
  _type: { type: String, default: 'QdmPatient' },

  // "data criteria", or QDM datatype elements that may exist on a patient.
  Id:  [IdSchema],
  PhysicalExamOrder:  [PhysicalExamOrderSchema],
  Participation:  [ParticipationSchema],
  PatientCharacteristicSex:  [PatientCharacteristicSexSchema],
  CareGoal:  [CareGoalSchema],
  PatientCharacteristic:  [PatientCharacteristicSchema],
  PatientCharacteristicEthnicity:  [PatientCharacteristicEthnicitySchema],
  PatientCharacteristicRace:  [PatientCharacteristicRaceSchema],
  LaboratoryTestPerformed:  [LaboratoryTestPerformedSchema],
  Symptom:  [SymptomSchema],
  MedicationAdministered:  [MedicationAdministeredSchema],
  ProcedureRecommended:  [ProcedureRecommendedSchema],
  EncounterPerformed:  [EncounterPerformedSchema],
  Diagnosis:  [DiagnosisSchema],
  CommunicationPerformed:  [CommunicationPerformedSchema],
  AssessmentPerformed:  [AssessmentPerformedSchema],
  PatientCharacteristicClinicalTrialParticipant:  [PatientCharacteristicClinicalTrialParticipantSchema],
  DeviceOrder:  [DeviceOrderSchema],
  DiagnosticStudyPerformed:  [DiagnosticStudyPerformedSchema],
  InterventionOrder:  [InterventionOrderSchema],
  FamilyHistory:  [FamilyHistorySchema],
  Component:  [ComponentSchema],
  ResultComponent:  [ResultComponentSchema],
  FacilityLocation:  [FacilityLocationSchema],
  MedicationActive:  [MedicationActiveSchema],
  LaboratoryTestOrder:  [LaboratoryTestOrderSchema],
  DiagnosticStudyOrder:  [DiagnosticStudyOrderSchema],
  SubstanceOrder:  [SubstanceOrderSchema],
  PatientCharacteristicPayer:  [PatientCharacteristicPayerSchema],
  PatientCharacteristicExpired:  [PatientCharacteristicExpiredSchema],
  AssessmentOrder:  [AssessmentOrderSchema],
  AssessmentRecommended:  [AssessmentRecommendedSchema],
  ImmunizationAdministered:  [ImmunizationAdministeredSchema],
  SubstanceAdministered:  [SubstanceAdministeredSchema],
  EncounterOrder:  [EncounterOrderSchema],
  EncounterRecommended:  [EncounterRecommendedSchema],
  ProcedurePerformed:  [ProcedurePerformedSchema],
  AllergyIntolerance:  [AllergyIntoleranceSchema],
  ProviderCharacteristic:  [ProviderCharacteristicSchema],
  PhysicalExamRecommended:  [PhysicalExamRecommendedSchema],
  PatientCharacteristicBirthdate:  [PatientCharacteristicBirthdateSchema],
  AdverseEvent:  [AdverseEventSchema],
  DeviceRecommended:  [DeviceRecommendedSchema],
  DeviceApplied:  [DeviceAppliedSchema],
  MedicationDischarge:  [MedicationDischargeSchema],
  InterventionPerformed:  [InterventionPerformedSchema],
  LaboratoryTestRecommended:  [LaboratoryTestRecommendedSchema],
  MedicationDispensed:  [MedicationDispensedSchema],
  DiagnosticStudyRecommended:  [DiagnosticStudyRecommendedSchema],
  ImmunizationOrder:  [ImmunizationOrderSchema],
  PatientCareExperience:  [PatientCareExperienceSchema],
  ProviderCareExperience:  [ProviderCareExperienceSchema],
  ProcedureOrder:  [ProcedureOrderSchema],
  MedicationOrder:  [MedicationOrderSchema],
  SubstanceRecommended:  [SubstanceRecommendedSchema],
  InterventionRecommended:  [InterventionRecommendedSchema],
  PhysicalExamPerformed:  [PhysicalExamPerformedSchema],


  // This field is for application specific information only. If both Bonnie
  // Cypress use a common field, it should be made a field on this model,
  // and not put into extendedData.
  extendedData: {
    type: Mixed,
    default: {},
  },
}, { id: false });

QDMPatientSchema.methods.id = function id() {
  return this._id;
};

// Returns an array of elements that exist on this patient, that
// match the given HQMF data criteria OID.
// QDMPatientSchema.methods.getByHqmfOid = function getByHqmfOid(hqmfOid) {
//   return this.dataElements.filter(element => element.hqmfOid === hqmfOid);
// };

// Returns an array of elements that exist on this patient, that
// match the given QRDA data criteria OID.
// QDMPatientSchema.methods.getByQrdaOid = function getByQrdaOid(qrdaOid) {
//   return this.dataElements.filter(element => element.qrdaOid === qrdaOid);
// };

// Returns an array of elements that exist on this patient. Optionally
// takes a qdmCategory, which returns all elements of that QDM qdmCategory.
// Example: patient.getDataElements({qdmCategory: 'encounters'}) will return
// all Encounter QDM data types active on the patient.
// QDMPatientSchema.methods.getDataElements = function getDataElements(params) {
//   if (params !== undefined && params.qdmCategory !== undefined && params.qdmStatus !== undefined) {
//     return this.dataElements.filter(element => (element.qdmCategory === params.qdmCategory) && (element.qdmStatus === params.qdmStatus));
//   } else if (params !== undefined && params.qdmCategory !== undefined) {
//     return this.dataElements.filter(element => element.qdmCategory === params.qdmCategory);
//   }
//   return this.dataElements;
// };

// Returns an array of dataElements that exist on the patient, queried by
// QDM profile
// @param {string} profile - the data criteria requested by the execution engine
// @param {boolean} isNegated - whether dataElements should be returned based on their negation status
// @returns {DataElement[]}
QDMPatientSchema.methods.getByProfile = function getByProfile(profile, isNegated = null) {
  // If isNegated == true, only return data elements with a negationRationale that is not null.
  // If isNegated == false, only return data elements with a null negationRationale.
  // If isNegated == null, return all matching data elements by type, regardless of negationRationale.
  const results = this.profile;
  return results.map((result) => {
    const removedMongooseItems = AllDataElements[profile](result).toObject();
    // toObject() will remove all mongoose functions but also remove the schema methods, so we add them back
    Object.entries(Object.getPrototypeOf(result).schema.methods).forEach(([method_name, method]) => {
      removedMongooseItems[method_name] = method;
    });
    return removedMongooseItems;
  });
};

// This method is called by the CQL execution engine on a CQLPatient when
// the execution engine wants information on a record. A record could be patient
// characteristic information about the patient, or it could be data criteria
// that currently exist on this patient (data criteria you drag on a patient
// in Bonnie patient builder).
// @param {String} profile - the data criteria requested by the execution engine
// @returns {Object}
QDMPatientSchema.methods.findRecords = function findRecords(profile) {
  let profileStripped;
  if (profile === 'Patient') {
    // Requested generic patient info
    const info = { birthDatetime: this.birthDatetime };
    return [info];
  } else if (/PatientCharacteristic/.test(profile)) {
    // Requested a patient characteristic
    profileStripped = profile.replace(/ *\{[^)]*\} */g, '');
    return this.getByProfile(profileStripped);
  } else if (profile != null) {
    // Requested something else (probably a QDM data type).

    // Strip model details from request. The requested profile string contains
    // a lot of things we do not need or care about. Example, we might see
    // something like:
    // "{urn:healthit-gov:qdm:v5_0_draft}PatientCharacteristicEthnicity"
    // Where we only care about: "PatientCharacteristicEthnicity".
    profileStripped = profile.replace(/ *\{[^)]*\} */g, '');

    // Check and handle negation status
    if (/Positive/.test(profileStripped)) {
      profileStripped = profileStripped.replace(/Positive/, '');
      // Since the data criteria is 'Positive', it is not negated.
      return this.getByProfile(profileStripped, false);
    } else if (/Negative/.test(profileStripped)) {
      profileStripped = profileStripped.replace(/Negative/, '');
      // Since the data criteria is 'Negative', it is negated.
      return this.getByProfile(profileStripped, true);
    }
    // No negation status, proceed normally
    return this.getByProfile(profileStripped);
  }
  return [];
};

module.exports.QDMPatientSchema = QDMPatientSchema;
