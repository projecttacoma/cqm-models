const cql = require('cql-execution');
const Mongoose = require('mongoose/browser');

// Data Element Schemas
const AdverseEvent = require('./../../../app/assets/javascripts/AdverseEvent.js').AdverseEvent;
const AllergyIntolerance = require('./../../../app/assets/javascripts/AllergyIntolerance.js').AllergyIntolerance;
const AssessmentPerformed = require('./../../../app/assets/javascripts/AssessmentPerformed.js').AssessmentPerformed;
const ProviderCareExperience = require('./../../../app/assets/javascripts/ProviderCareExperience.js').ProviderCareExperience;
const CareGoal = require('./../../../app/assets/javascripts/CareGoal.js').CareGoal;
const CommunicationPerformed = require('./../../../app/assets/javascripts/CommunicationPerformed.js').CommunicationPerformed;
const Diagnosis = require('./../../../app/assets/javascripts/Diagnosis.js').Diagnosis;
const DeviceApplied = require('./../../../app/assets/javascripts/DeviceApplied.js').DeviceApplied;
const DeviceOrder = require('./../../../app/assets/javascripts/DeviceOrder.js').DeviceOrder;
const DeviceRecommended = require('./../../../app/assets/javascripts/DeviceRecommended.js').DeviceRecommended;
const DiagnosticStudyOrder = require('./../../../app/assets/javascripts/DiagnosticStudyOrder.js').DiagnosticStudyOrder;
const EncounterPerformed = require('./../../../app/assets/javascripts/EncounterPerformed.js').EncounterPerformed;
const FamilyHistory = require('./../../../app/assets/javascripts/FamilyHistory.js').FamilyHistory;
const ImmunizationAdministered = require('./../../../app/assets/javascripts/ImmunizationAdministered.js').ImmunizationAdministered;
const InterventionPerformed = require('./../../../app/assets/javascripts/InterventionPerformed.js').InterventionPerformed;
const LaboratoryTestOrder = require('./../../../app/assets/javascripts/LaboratoryTestOrder.js').LaboratoryTestOrder;
const MedicationActive = require('./../../../app/assets/javascripts/MedicationActive.js').MedicationActive;
const MedicationOrder = require('./../../../app/assets/javascripts/MedicationOrder.js').MedicationOrder;
const Patient = require('./../../../app/assets/javascripts/cqm/Patient.js').Patient;
const PhysicalExamOrder = require('./../../../app/assets/javascripts/PhysicalExamOrder.js').PhysicalExamOrder;
const ProviderCharacteristic = require('./../../../app/assets/javascripts/ProviderCharacteristic.js').ProviderCharacteristic;
const ProcedureOrder = require('./../../../app/assets/javascripts/ProcedureOrder.js').ProcedureOrder;
const QDMPatient = require('./../../../app/assets/javascripts/QDMPatient.js').QDMPatient;
const SubstanceAdministered = require('./../../../app/assets/javascripts/SubstanceAdministered.js').SubstanceAdministered;
const Symptom = require('./../../../app/assets/javascripts/Symptom.js').Symptom;

describe('QDMPatient', () => {
  it('can create a blank patient', () => {
    new QDMPatient();
  });
});

  it('can construct a patient with data', () => {
    qdmPatient = new QDMPatient({
      birthDatetime: cql.DateTime.fromJSDate(new Date(), 0),
      qdmVersion: '0.0',
    });
    err = qdmPatient.validateSync();
    expect(err).toBeUndefined();
    expect(qdmPatient.id()).toBeDefined();
  });

  describe('InitializeDataElements', () => {
    it('can handle an empty data elements array', () => {
      qdmPatient = new QDMPatient({
        birthDatetime: cql.DateTime.fromJSDate(new Date(), 0),
        qdmVersion: '0.0',
      });
      qdmPatient.initializeDataElements();
      expect(qdmPatient.dataElements.length).toEqual(0);
    });

    it('can initialize a data elements array with a single entry', () => {
      qdmPatient = new QDMPatient({
        birthDatetime: cql.DateTime.fromJSDate(new Date(), 0),
        qdmVersion: '0.0',
        dataElements: [new MedicationOrder()]
      });
      expect(qdmPatient.dataElements.length).toEqual(1);
    });

    it('can initialize a data elements array with a multiple entries', () => {
      qdmPatient = new QDMPatient({
        birthDatetime: cql.DateTime.fromJSDate(new Date(), 0),
        qdmVersion: '0.0',
        dataElements: [new MedicationOrder(), new MedicationOrder()]
      });
      expect(qdmPatient.dataElements.length).toEqual(2);
    });
  });
  describe('getDataElements', () => {
    it('can return dataElements with and without qdmCategory', () => {
      qdmPatient = new QDMPatient({
        birthDatetime: cql.DateTime.fromJSDate(new Date(), 0),
        qdmVersion: '0.0',
        dataElements: [
          new AdverseEvent(),
          new CareGoal(),
          new CareGoal(),
          new MedicationOrder(),
          new AdverseEvent(),
          new AdverseEvent(),
        ]
      });
      expect(qdmPatient.getDataElements().length).toEqual(6);
      expect(qdmPatient.getDataElements({qdmCategory: 'care_goal'}).length).toEqual(2);
      expect(qdmPatient.getDataElements({qdmCategory: 'medication'}).length).toEqual(1);
      expect(qdmPatient.getDataElements({qdmCategory: 'adverse_event'}).length).toEqual(3);
    });

    it('can return dataElements with qdmCategory and qdmStatus', () => {
      qdmPatient = new QDMPatient({
        birthDatetime: cql.DateTime.fromJSDate(new Date(), 0),
        qdmVersion: '0.0',
        dataElements: [
          new DeviceApplied(),
          new DeviceApplied(),
          new DeviceOrder(),
          new DeviceRecommended(),
          new DeviceRecommended(),
          new DeviceRecommended(),
        ]
      });
      expect(qdmPatient.getDataElements({qdmCategory: 'device'}).length).toEqual(6);
      expect(qdmPatient.getDataElements({qdmCategory: 'device', qdmStatus: 'applied'}).length).toEqual(2);
      expect(qdmPatient.getDataElements({qdmCategory: 'device', qdmStatus: 'recommended'}).length).toEqual(3);
      expect(qdmPatient.getDataElements({qdmCategory: 'device', qdmStatus: 'order'}).length).toEqual(1);
    });
  });

  describe('Individual Data Element methods', () => {
    it('can return each data element by its named getter', () => {
      qdmPatient = new QDMPatient({
        birthDatetime: cql.DateTime.fromJSDate(new Date(), 0),
        qdmVersion: '0.0',
        dataElements: [
          new AdverseEvent(),
          new AllergyIntolerance(),
          new AssessmentPerformed(),
          new ProviderCareExperience(),
          new CareGoal(),
          new CommunicationPerformed(),
          new Diagnosis(),
          new DeviceApplied(),
          new DiagnosticStudyOrder(),
          new EncounterPerformed(),
          new FamilyHistory(),
          new ImmunizationAdministered(),
          new InterventionPerformed(),
          new LaboratoryTestOrder(),
          new MedicationActive(),
          new PhysicalExamOrder(),
          new ProviderCharacteristic(),
          new ProcedureOrder(),
          new SubstanceAdministered(),
          new Symptom(),
        ]
      });
      expect(qdmPatient.getDataElements().length).toEqual(20);
      expect(qdmPatient.adverse_events().length).toEqual(1);
      expect(qdmPatient.allergies().length).toEqual(1);
      expect(qdmPatient.assessments().length).toEqual(1);
      expect(qdmPatient.care_experiences().length).toEqual(1);
      expect(qdmPatient.care_goals().length).toEqual(1);
      expect(qdmPatient.communications().length).toEqual(1);
      expect(qdmPatient.conditions().length).toEqual(1);
      expect(qdmPatient.devices().length).toEqual(1);
      expect(qdmPatient.diagnostic_studies().length).toEqual(1);
      expect(qdmPatient.encounters().length).toEqual(1);
      expect(qdmPatient.family_history().length).toEqual(1);
      expect(qdmPatient.functional_statuses().length).toEqual(0);
      expect(qdmPatient.immunizations().length).toEqual(1);
      expect(qdmPatient.interventions().length).toEqual(1);
      expect(qdmPatient.laboratory_tests().length).toEqual(1);
      expect(qdmPatient.medical_equipment().length).toEqual(0);
      expect(qdmPatient.medications().length).toEqual(1);
      expect(qdmPatient.physical_exams().length).toEqual(1);
      expect(qdmPatient.preferences().length).toEqual(0);
      expect(qdmPatient.provider_characteristics().length).toEqual(1);
      expect(qdmPatient.procedures().length).toEqual(1);
      expect(qdmPatient.results().length).toEqual(0);
      expect(qdmPatient.risk_category_assessments().length).toEqual(0);
      expect(qdmPatient.social_history().length).toEqual(0);
      expect(qdmPatient.substances().length).toEqual(1);
      expect(qdmPatient.symptoms().length).toEqual(1);
      expect(qdmPatient.system_characteristics().length).toEqual(0);
      expect(qdmPatient.transfers().length).toEqual(0);
      expect(qdmPatient.vital_signs().length).toEqual(0);
    });
  });
  describe('getByHqmfOid', () => {
    it('can return dataElements given an hqmf oid', () => {
      qdmPatient = new QDMPatient({
        birthDatetime: cql.DateTime.fromJSDate(new Date(), 0),
        qdmVersion: '0.0',
        dataElements: [
          new AdverseEvent(),
          new CareGoal(),
          new CareGoal(),
        ]
      });
      expect(qdmPatient.getByHqmfOid('2.16.840.1.113883.10.20.28.3.120').length).toEqual(1);
      expect(qdmPatient.getByHqmfOid('2.16.840.1.113883.10.20.28.3.7').length).toEqual(2);
    });
  });

  describe('getByQrdaOid', () => {
    it('can return dataElements given an qrda oid', () => {
      qdmPatient = new QDMPatient({
        birthDatetime: cql.DateTime.fromJSDate(new Date(), 0),
        qdmVersion: '0.0',
        dataElements: [
          new Diagnosis(),
          new FamilyHistory(),
          new FamilyHistory(),
        ]
      });
      expect(qdmPatient.getByQrdaOid('2.16.840.1.113883.10.20.24.3.135').length).toEqual(1);
      expect(qdmPatient.getByQrdaOid('2.16.840.1.113883.10.20.24.3.12').length).toEqual(2);
    });
  });

  describe('findRecords', () => {
    beforeEach( () => {
      qdmPatient = new QDMPatient({
        birthDatetime: cql.DateTime.fromJSDate(new Date(), 0),
        qdmVersion: '0.0',
        dataElements: [
          new AdverseEvent(),
          new CareGoal(),
          new CareGoal(),
          new EncounterPerformed(),
          new EncounterPerformed(),
          new EncounterPerformed({
            negationRationale: new cql.Code('do', 're', 'mi')
          }),
        ]
      });
    });

    it('can return empty array when no parameters are given', () => {
      expect(qdmPatient.findRecords()).toEqual([]);
    });

    it('can return generic patient info', () => {
      expect(qdmPatient.findRecords('Patient')[0].birthDatetime).toBeDefined();
    });

    it('can return all patient characteristics of a specific caregory', () => {
      // If possible, set the patient to have an ethnicity so this function returns a non-empty array
      expect(qdmPatient.findRecords('PatientCharacteristicEthnicity').length).toEqual(0);
    });
    it('can return all dataElements of a specific category', () => {
      expect(qdmPatient.findRecords('EncounterPerformed').length).toEqual(3);
      expect(qdmPatient.findRecords('PositiveEncounterPerformed').length).toEqual(2);
      expect(qdmPatient.findRecords('NegativeEncounterPerformed').length).toEqual(1);
    });
  });

describe('CQMPatient', () => {
  it('can create a blank patient', () => {
    expect(() => {new Patient()}).not.toThrow();
  });

  it('can construct a patient with data', () => {
    // const Patient = Mongoose.model('Patient', PatientSchema);
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
