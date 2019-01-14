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
    this.AdverseEvent = Mongoose.model('AdverseEvent', AdverseEventSchema);
    this.CareGoal = Mongoose.model('CareGoal', CareGoalSchema);
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
    expect(qdmPatient.id()).toBeDefined();
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
  describe('getDataElements', () => {
    it('can return dataElements with and without qdmCategory', () => {
      qdmPatient = new this.QDMPatient({
        birthDatetime: cql.DateTime.fromJSDate(new Date(), 0),
        qdmVersion: '0.0',
        dataElements: [
          new this.AdverseEvent(),
          new this.CareGoal(),
          new this.CareGoal(),
          new this.MedicationOrder(),
          new this.AdverseEvent(),
          new this.AdverseEvent(),
        ]
      });
      expect(qdmPatient.getDataElements().length).toEqual(6);
      expect(qdmPatient.getDataElements({qdmCategory: 'care_goal'}).length).toEqual(2);
      expect(qdmPatient.getDataElements({qdmCategory: 'medication'}).length).toEqual(1);
      expect(qdmPatient.getDataElements({qdmCategory: 'adverse_event'}).length).toEqual(3);
    });

    it('can return dataElements with qdmCategory and qdmStatus', () => {
      this.DeviceApplied = Mongoose.model('DeviceApplied', DeviceAppliedSchema);
      this.DeviceOrder = Mongoose.model('DeviceOrder', DeviceOrderSchema);
      this.DeviceRecommended = Mongoose.model('DeviceRecommended', DeviceRecommendedSchema);

      qdmPatient = new this.QDMPatient({
        birthDatetime: cql.DateTime.fromJSDate(new Date(), 0),
        qdmVersion: '0.0',
        dataElements: [
          new this.DeviceApplied(),
          new this.DeviceApplied(),
          new this.DeviceOrder(),
          new this.DeviceRecommended(),
          new this.DeviceRecommended(),
          new this.DeviceRecommended(),
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
      this.AllergyIntolerance = Mongoose.model('AllergyIntolerance', AllergyIntoleranceSchema);
      this.AssessmentPerformed = Mongoose.model('AssessmentPerformed', AssessmentPerformedSchema);
      this.ProviderCareExperience = Mongoose.model('ProviderCareExperience', ProviderCareExperienceSchema);
      this.CommunicationPerformed = Mongoose.model('CommunicationPerformed', CommunicationPerformedSchema);
      this.Diagnosis = Mongoose.model('Diagnosis', DiagnosisSchema);
      this.DeviceApplied = Mongoose.model('DeviceApplied', DeviceAppliedSchema);
      this.DiagnosticStudyOrder = Mongoose.model('DiagnosticStudyOrder', DiagnosticStudyOrderSchema);
      this.EncounterPerformed = Mongoose.model('EncounterPerformed', EncounterPerformedSchema);
      this.FamilyHistory = Mongoose.model('FamilyHistory', FamilyHistorySchema);
      this.ImmunizationAdministered = Mongoose.model('ImmunizationAdministered', ImmunizationAdministeredSchema);
      this.InterventionPerformed = Mongoose.model('InterventionPerformed', InterventionPerformedSchema);
      this.LaboratoryTestOrder = Mongoose.model('LaboratoryTestOrder', LaboratoryTestOrderSchema);
      this.MedicationActive = Mongoose.model('MedicationActive', MedicationActiveSchema);
      this.PhysicalExamOrder = Mongoose.model('PhysicalExamOrder', PhysicalExamOrderSchema);
      this.ProviderCharacteristic = Mongoose.model('ProviderCharacteristic', ProviderCharacteristicSchema);
      this.ProcedureOrder = Mongoose.model('ProcedureOrder', ProcedureOrderSchema);
      this.SubstanceAdministered = Mongoose.model('SubstanceAdministered', SubstanceAdministeredSchema);
      this.Symptom = Mongoose.model('Symptom', SymptomSchema);

      qdmPatient = new this.QDMPatient({
        birthDatetime: cql.DateTime.fromJSDate(new Date(), 0),
        qdmVersion: '0.0',
        dataElements: [
          new this.AdverseEvent(),
          new this.AllergyIntolerance(),
          new this.AssessmentPerformed(),
          new this.ProviderCareExperience(),
          new this.CareGoal(),
          new this.CommunicationPerformed(),
          new this.Diagnosis(),
          new this.DeviceApplied(),
          new this.DiagnosticStudyOrder(),
          new this.EncounterPerformed(),
          new this.FamilyHistory(),
          new this.ImmunizationAdministered(),
          new this.InterventionPerformed(),
          new this.LaboratoryTestOrder(),
          new this.MedicationActive(),
          new this.PhysicalExamOrder(),
          new this.ProviderCharacteristic(),
          new this.ProcedureOrder(),
          new this.SubstanceAdministered(),
          new this.Symptom(),
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
      qdmPatient = new this.QDMPatient({
        birthDatetime: cql.DateTime.fromJSDate(new Date(), 0),
        qdmVersion: '0.0',
        dataElements: [
          new this.AdverseEvent(),
          new this.CareGoal(),
          new this.CareGoal(),
        ]
      });
      expect(qdmPatient.getByHqmfOid('2.16.840.1.113883.10.20.28.3.120').length).toEqual(1);
      expect(qdmPatient.getByHqmfOid('2.16.840.1.113883.10.20.28.3.7').length).toEqual(2);
    });
  });

  describe('getByQrdaOid', () => {
    it('can return dataElements given an qrda oid', () => {
      this.Diagnosis = Mongoose.model('Diagnosis', DiagnosisSchema);
      this.FamilyHistory = Mongoose.model('FamilyHistory', FamilyHistorySchema);

      qdmPatient = new this.QDMPatient({
        birthDatetime: cql.DateTime.fromJSDate(new Date(), 0),
        qdmVersion: '0.0',
        dataElements: [
          new this.Diagnosis(),
          new this.FamilyHistory(),
          new this.FamilyHistory(),
        ]
      });
      expect(qdmPatient.getByQrdaOid('2.16.840.1.113883.10.20.24.3.135').length).toEqual(1);
      expect(qdmPatient.getByQrdaOid('2.16.840.1.113883.10.20.24.3.12').length).toEqual(2);
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
