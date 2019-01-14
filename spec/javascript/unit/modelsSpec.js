const cql = require('cql-execution');
const Mongoose = require('mongoose');
const MedicationOrderSchema = require('./../../../app/assets/javascripts/index.js').MedicationOrderSchema;
const PatientSchema = require('./../../../app/assets/javascripts/index.js').PatientSchema;
const QDMPatientSchema = require('./../../../app/assets/javascripts/index.js').QDMPatientSchema;

// Data Element Schemas
const AdverseEventSchema = require('./../../../app/assets/javascripts/AdverseEvent.js').AdverseEventSchema;
const AllergyIntoleranceSchema = require('./../../../app/assets/javascripts/AllergyIntolerance.js').AllergyIntoleranceSchema;
const AssessmentPerformedSchema = require('./../../../app/assets/javascripts/AssessmentPerformed.js').AssessmentPerformedSchema;
const ProviderCareExperienceSchema = require('./../../../app/assets/javascripts/ProviderCareExperience.js').ProviderCareExperienceSchema;
const CareGoalSchema = require('./../../../app/assets/javascripts/CareGoal.js').CareGoalSchema;
const CommunicationPerformedSchema = require('./../../../app/assets/javascripts/CommunicationPerformed.js').CommunicationPerformedSchema;
const DiagnosisSchema = require('./../../../app/assets/javascripts/Diagnosis.js').DiagnosisSchema;
const DeviceAppliedSchema = require('./../../../app/assets/javascripts/DeviceApplied.js').DeviceAppliedSchema;
const DeviceOrderSchema = require('./../../../app/assets/javascripts/DeviceOrder.js').DeviceOrderSchema;
const DeviceRecommendedSchema = require('./../../../app/assets/javascripts/DeviceRecommended.js').DeviceRecommendedSchema;
const DiagnosticStudyOrderSchema = require('./../../../app/assets/javascripts/DiagnosticStudyOrder.js').DiagnosticStudyOrderSchema;
const EncounterPerformedSchema = require('./../../../app/assets/javascripts/EncounterPerformed.js').EncounterPerformedSchema;
const FamilyHistorySchema = require('./../../../app/assets/javascripts/FamilyHistory.js').FamilyHistorySchema;
const ImmunizationAdministeredSchema = require('./../../../app/assets/javascripts/ImmunizationAdministered.js').ImmunizationAdministeredSchema;
const InterventionPerformedSchema = require('./../../../app/assets/javascripts/InterventionPerformed.js').InterventionPerformedSchema;
const LaboratoryTestOrderSchema = require('./../../../app/assets/javascripts/LaboratoryTestOrder.js').LaboratoryTestOrderSchema;
const MedicationActiveSchema = require('./../../../app/assets/javascripts/MedicationActive.js').MedicationActiveSchema;
const PhysicalExamOrderSchema = require('./../../../app/assets/javascripts/PhysicalExamOrder.js').PhysicalExamOrderSchema;
const ProviderCharacteristicSchema = require('./../../../app/assets/javascripts/ProviderCharacteristic.js').ProviderCharacteristicSchema;
const ProcedureOrderSchema = require('./../../../app/assets/javascripts/ProcedureOrder.js').ProcedureOrderSchema;
const SubstanceAdministeredSchema = require('./../../../app/assets/javascripts/SubstanceAdministered.js').SubstanceAdministeredSchema;
const SymptomSchema = require('./../../../app/assets/javascripts/Symptom.js').SymptomSchema;

describe('QDMPatient', () => {
  beforeEach( () => {
    this.QDMPatient = Mongoose.model('QDMPatient', QDMPatientSchema);
  });

  it('can create a blank patient', () => {
    expect(() => {new this.QDMPatient()}).not.toThrow();
  });

  it('can construct a patient with data', () => {
    qdmPatient = new this.QDMPatient({
      birthDatetime: cql.DateTime.fromJSDate(new Date(), 0),
      qdmVersion: '0.0',
    });
    err = qdmPatient.validateSync();
    expect(err).toBeUndefined();
  });

  describe('InitializeDataElements', () => {
    beforeEach( () => {
      this.MedicationOrder = Mongoose.model('MedicationOrder', MedicationOrderSchema);
    });

    it('can initialize an empty data elements array', () => {
      qdmPatient = new this.QDMPatient({
        birthDatetime: cql.DateTime.fromJSDate(new Date(), 0),
        qdmVersion: '0.0',
      });
      qdmPatient.initializeDataElements;
      expect(qdmPatient.dataElements.length).toEqual(0);
    });

    it('can initialize an data elements array with a single entry', () => {
      qdmPatient = new this.QDMPatient({
        birthDatetime: cql.DateTime.fromJSDate(new Date(), 0),
        qdmVersion: '0.0',
        dataElements: [new this.MedicationOrder()]
      });
      qdmPatient.initializeDataElements;
      expect(qdmPatient.dataElements.length).toEqual(1);
    });

    it('can initialize an data elements array with a multiple entries', () => {
      qdmPatient = new this.QDMPatient({
        birthDatetime: cql.DateTime.fromJSDate(new Date(), 0),
        qdmVersion: '0.0',
        dataElements: [new this.MedicationOrder(), new this.MedicationOrder()]
      });
      qdmPatient.initializeDataElements;
      expect(qdmPatient.dataElements.length).toEqual(2);
    });
  });
});

describe('CQMPatient', () => {
  it('can create a blank patient', () => {
    const Patient = Mongoose.model('Patient', PatientSchema);
    expect(() => {new Patient()}).not.toThrow();
  });

  it('can construct a patient with data', () => {
    const Patient = Mongoose.model('Patient', PatientSchema);
    patient = new Patient({
      givenNames: ['name1', 'name2'],
      familyName: 'foo',
      bundleId: '012210',
      expectedValues: [],
      notes: 'Random note for testing',
    });
    err = patient.validateSync();
    expect(err).toBeUndefined();
  });

  it('can contain a qdm patient', () => {
    const Patient = Mongoose.model('Patient', PatientSchema);
    const QDMPatient = Mongoose.model('QDMPatient', QDMPatientSchema);
    qdmData = new QDMPatient({
      birthDatetime: cql.DateTime.fromJSDate(new Date(), 0),
      qdmVersion: '0.0',
    });
    patient = new Patient({
      givenNames: ['name1', 'name2'],
      familyName: 'foo',
      bundleId: '012210',
      expectedValues: [],
      notes: 'Random note for testing',
      qdmPatient: qdmData,
    });
    err = patient.validateSync();
    expect(err).toBeUndefined();
    expect(patient.qdmPatient).toBeDefined();
  });
});
