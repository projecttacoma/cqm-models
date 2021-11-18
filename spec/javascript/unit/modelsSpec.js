const cql = require('cql-execution');
const Mongoose = require('mongoose/browser');

// Data Element Schemas
const AdverseEvent = require('./../../../app/assets/javascripts/AdverseEvent.js').AdverseEvent;
const AllergyIntolerance = require('./../../../app/assets/javascripts/AllergyIntolerance.js').AllergyIntolerance;
const AssessmentOrder = require('./../../../app/assets/javascripts/AssessmentOrder.js').AssessmentOrder;
const AssessmentPerformed = require('./../../../app/assets/javascripts/AssessmentPerformed.js').AssessmentPerformed;
const AssessmentRecommended = require('./../../../app/assets/javascripts/AssessmentRecommended.js').AssessmentRecommended;
const ProviderCareExperience = require('./../../../app/assets/javascripts/ProviderCareExperience.js').ProviderCareExperience;
const CareGoal = require('./../../../app/assets/javascripts/CareGoal.js').CareGoal;
const CarePartner = require('./../../../app/assets/javascripts/attributes/CarePartner.js').CarePartner;
const Location = require('./../../../app/assets/javascripts/attributes/Location.js').Location;
const Concept = require('./../../../app/assets/javascripts/cqm/Concept.js').Concept;
const Component = require('./../../../app/assets/javascripts/attributes/Component.js').Component;
const CommunicationPerformed = require('./../../../app/assets/javascripts/CommunicationPerformed.js').CommunicationPerformed;
const CQLLibrary = require('./../../../app/assets/javascripts/cqm/CQLLibrary.js').CQLLibrary;
const DateTime = require('./../../../app/assets/javascripts/basetypes/DateTime.js');
const QDMDate = require('../../../app/assets/javascripts/basetypes/QDMDate.js');
const Diagnosis = require('./../../../app/assets/javascripts/Diagnosis.js').Diagnosis;
const DiagnosisComponent = require('./../../../app/assets/javascripts/attributes/DiagnosisComponent.js').DiagnosisComponent;
const DeviceOrder = require('./../../../app/assets/javascripts/DeviceOrder.js').DeviceOrder;
const DeviceRecommended = require('./../../../app/assets/javascripts/DeviceRecommended.js').DeviceRecommended;
const DiagnosticStudyOrder = require('./../../../app/assets/javascripts/DiagnosticStudyOrder.js').DiagnosticStudyOrder;
const DiagnosticStudyPerformed = require('./../../../app/assets/javascripts/DiagnosticStudyPerformed.js').DiagnosticStudyPerformed;
const DiagnosticStudyRecommended = require('./../../../app/assets/javascripts/DiagnosticStudyRecommended.js').DiagnosticStudyRecommended;
const EncounterOrder = require('./../../../app/assets/javascripts/EncounterOrder.js').EncounterOrder;
const EncounterPerformed = require('./../../../app/assets/javascripts/EncounterPerformed.js').EncounterPerformed;
const EncounterRecommended = require('./../../../app/assets/javascripts/EncounterRecommended.js').EncounterRecommended;
const FacilityLocation = require('./../../../app/assets/javascripts/attributes/FacilityLocation.js').FacilityLocation;
const FamilyHistory = require('./../../../app/assets/javascripts/FamilyHistory.js').FamilyHistory;
const Identifier = require('./../../../app/assets/javascripts/attributes/Identifier.js').Identifier;
const ImmunizationAdministered = require('./../../../app/assets/javascripts/ImmunizationAdministered.js').ImmunizationAdministered;
const ImmunizationOrder = require('./../../../app/assets/javascripts/ImmunizationOrder.js').ImmunizationOrder;
const IndividualResult = require('./../../../app/assets/javascripts/cqm/IndividualResult.js').IndividualResult;
const InterventionOrder = require('./../../../app/assets/javascripts/InterventionOrder.js').InterventionOrder;
const InterventionPerformed = require('./../../../app/assets/javascripts/InterventionPerformed.js').InterventionPerformed;
const InterventionRecommended = require('./../../../app/assets/javascripts/InterventionRecommended.js').InterventionRecommended;
const LaboratoryTestOrder = require('./../../../app/assets/javascripts/LaboratoryTestOrder.js').LaboratoryTestOrder;
const LaboratoryTestPerformed = require('./../../../app/assets/javascripts/LaboratoryTestPerformed.js').LaboratoryTestPerformed;
const LaboratoryTestRecommended = require('./../../../app/assets/javascripts/LaboratoryTestRecommended.js').LaboratoryTestRecommended;
const MedicationActive = require('./../../../app/assets/javascripts/MedicationActive.js').MedicationActive;
const MedicationAdministered = require('./../../../app/assets/javascripts/MedicationAdministered.js').MedicationAdministered;
const MedicationDischarge = require('./../../../app/assets/javascripts/MedicationDischarge.js').MedicationDischarge;
const MedicationDispensed = require('./../../../app/assets/javascripts/MedicationDispensed.js').MedicationDispensed;
const MedicationOrder = require('./../../../app/assets/javascripts/MedicationOrder.js').MedicationOrder;
const Observation = require('./../../../app/assets/javascripts/cqm/PopulationSet.js').Observation;
const Participation = require('./../../../app/assets/javascripts/Participation.js').Participation;
const Patient = require('./../../../app/assets/javascripts/cqm/Patient.js').Patient;
const PatientCareExperience = require('./../../../app/assets/javascripts/PatientCareExperience.js').PatientCareExperience;
const PatientCharacteristic = require('./../../../app/assets/javascripts/PatientCharacteristic.js').PatientCharacteristic;
const PatientCharacteristicBirthdate = require('./../../../app/assets/javascripts/PatientCharacteristicBirthdate.js').PatientCharacteristicBirthdate;
const PatientCharacteristicEthnicity = require('./../../../app/assets/javascripts/PatientCharacteristicEthnicity.js').PatientCharacteristicEthnicity;
const PatientCharacteristicExpired = require('./../../../app/assets/javascripts/PatientCharacteristicExpired.js').PatientCharacteristicExpired;
const PatientCharacteristicPayer = require('./../../../app/assets/javascripts/PatientCharacteristicPayer.js').PatientCharacteristicPayer;
const PatientCharacteristicClinicalTrialParticipant = require('./../../../app/assets/javascripts/PatientCharacteristicClinicalTrialParticipant.js').PatientCharacteristicClinicalTrialParticipant;
const PatientCharacteristicRace = require('./../../../app/assets/javascripts/PatientCharacteristicRace.js').PatientCharacteristicRace;
const PatientCharacteristicSex = require('./../../../app/assets/javascripts/PatientCharacteristicSex.js').PatientCharacteristicSex;
const PhysicalExamOrder = require('./../../../app/assets/javascripts/PhysicalExamOrder.js').PhysicalExamOrder;
const PhysicalExamPerformed = require('./../../../app/assets/javascripts/PhysicalExamPerformed.js').PhysicalExamPerformed;
const PhysicalExamRecommended = require('./../../../app/assets/javascripts/PhysicalExamRecommended.js').PhysicalExamRecommended;
const PopulationMap = require('./../../../app/assets/javascripts/cqm/PopulationSet.js').PopulationMap;
const PopulationSet = require('./../../../app/assets/javascripts/cqm/PopulationSet.js').PopulationSet;
const ProcedureOrder = require('./../../../app/assets/javascripts/ProcedureOrder.js').ProcedureOrder;
const ProcedurePerformed = require('./../../../app/assets/javascripts/ProcedurePerformed.js').ProcedurePerformed;
const ProcedureRecommended = require('./../../../app/assets/javascripts/ProcedureRecommended.js').ProcedureRecommended;
const QDMPatient = require('./../../../app/assets/javascripts/QDMPatient.js').QDMPatient;
const QDMPatientSchema = require('./../../../app/assets/javascripts/QDMPatient.js').QDMPatientSchema;
const ResultComponent = require('./../../../app/assets/javascripts/attributes/ResultComponent.js').ResultComponent;
const Stratification = require('./../../../app/assets/javascripts/cqm/PopulationSet.js').Stratification;
const SubstanceAdministered = require('./../../../app/assets/javascripts/SubstanceAdministered.js').SubstanceAdministered;
const SubstanceOrder = require('./../../../app/assets/javascripts/SubstanceOrder.js').SubstanceOrder;
const SubstanceRecommended = require('./../../../app/assets/javascripts/SubstanceRecommended.js').SubstanceRecommended;
const Symptom = require('./../../../app/assets/javascripts/Symptom.js').Symptom;
const ValueSet = require('./../../../app/assets/javascripts/cqm/ValueSet.js').ValueSet;

/* eslint no-underscore-dangle: 0 */
describe('QDMPatient', () => {
  it('can create a blank patient', () => {
    new QDMPatient();
  });

  it('_typeHierarchy', () => {
    const qdmPatient = new QDMPatient();
    expect(qdmPatient._typeHierarchy()).toEqual([
      { name: '{urn:healthit-gov:qdm:v5_6}Patient', type: 'NamedTypeSpecifier' },
      { name: '{urn:hl7-org:elm-types:r1}Tuple', type: 'NamedTypeSpecifier' },
      { name: '{urn:hl7-org:elm-types:r1}Any', type: 'NamedTypeSpecifier' },
    ]);
  });

  it('_is Patient', () => {
    const qdmPatient = new QDMPatient();
    const typeSpecifier = { name: '{urn:healthit-gov:qdm:v5_6}Patient', type: 'NamedTypeSpecifier' };
    expect(qdmPatient._is(typeSpecifier)).toBe(true);
  });

  it('_is Any', () => {
    const qdmPatient = new QDMPatient();
    const typeSpecifier = { name: '{urn:hl7-org:elm-types:r1}Any', type: 'NamedTypeSpecifier' };
    expect(qdmPatient._is(typeSpecifier)).toBe(true);
  });

  it('can construct a patient with data', () => {
    const qdmPatient = new QDMPatient({
      birthDatetime: cql.DateTime.fromJSDate(new Date(), 0),
      qdmVersion: '0.0',
    });
    const err = qdmPatient.validateSync();
    expect(err).toBeUndefined();
  });

  it('can construct a patient with extendedData', () => {
    qdmPatient = new QDMPatient({
      birthDatetime: cql.DateTime.fromJSDate(new Date(), 0),
      qdmVersion: '0.0',
      extendedData: {
        measure_ids: ['ID123']
      }
    });
    err = qdmPatient.validateSync();
    expect(err).toBeUndefined();
    expect(qdmPatient.extendedData['measure_ids']).toEqual(['ID123']);
  });
});

describe('is and typeHierarchy', () => {
  it('supports _typeHierarchy in data elements', () => {
    const dataElement = new MedicationOrder();
    expect(dataElement._typeHierarchy()).toEqual([
      { name: '{urn:healthit-gov:qdm:v5_6}PositiveMedicationOrder', type: 'NamedTypeSpecifier' },
      { name: '{urn:healthit-gov:qdm:v5_6}MedicationOrder', type: 'NamedTypeSpecifier' },
      { name: '{urn:hl7-org:elm-types:r1}Tuple', type: 'NamedTypeSpecifier' },
      { name: '{urn:hl7-org:elm-types:r1}Any', type: 'NamedTypeSpecifier' },
    ]);
  });

  it('_is MedicationOrder', () => {
    const dataElement = new MedicationOrder();
    const typeSpecifier = { name: '{urn:healthit-gov:qdm:v5_6}MedicationOrder', type: 'NamedTypeSpecifier' };
    expect(dataElement._is(typeSpecifier)).toBe(true);
  });

  it('_is PositiveMedicationOrder', () => {
    const dataElement = new MedicationOrder();
    const typeSpecifier = { name: '{urn:healthit-gov:qdm:v5_6}PositiveMedicationOrder', type: 'NamedTypeSpecifier' };
    expect(dataElement._is(typeSpecifier)).toBe(true);
  });

  it('_is NegativeMedicationOrder', () => {
    const dataElement = new MedicationOrder({ negationRationale: new cql.Code('present', 'on', 'admission') });
    const typeSpecifier = { name: '{urn:healthit-gov:qdm:v5_6}NegativeMedicationOrder', type: 'NamedTypeSpecifier' };
    expect(dataElement._is(typeSpecifier)).toBe(true);
  });

  it('_is Any', () => {
    const dataElement = new MedicationOrder();
    const typeSpecifier = { name: '{urn:hl7-org:elm-types:r1}Any', type: 'NamedTypeSpecifier' };
    expect(dataElement._is(typeSpecifier)).toBe(true);
  });
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

  it('can get codes from a data element', () => {
    dataElement = new MedicationOrder();
    // dataElement Codes with mixed hash and cql.Codes
    dataElement.dataElementCodes = [{code: '12345', system: '1.2.3'}, new cql.Code('1', '2.3.4')]
    expect(dataElement.code().code).toEqual('12345');
    expect(dataElement.code().system).toEqual('1.2.3');
    expect(dataElement.getCode().length).toEqual(2);
    expect(dataElement.getCode()[0].code).toEqual('12345');
    expect(dataElement.getCode()[0].system).toEqual('1.2.3');
    // dataElement Codes with just cql.Codes
    dataElement.dataElementCodes = [new cql.Code('12345', '1.2.3'), new cql.Code('1', '2.3.4')]
    expect(dataElement.code().code).toEqual('12345');
    expect(dataElement.code().system).toEqual('1.2.3');
    expect(dataElement.getCode().length).toEqual(2);
    expect(dataElement.getCode()[0].code).toEqual('12345');
    expect(dataElement.getCode()[0].system).toEqual('1.2.3');
  });

  it('can initialize a data element array with an entity', () => {
    qdmPatient = new QDMPatient({
      birthDatetime: cql.DateTime.fromJSDate(new Date(), 0),
      qdmVersion: '0.0',
      dataElements: [
        new EncounterPerformed({
          diagnoses: [new DiagnosisComponent({
            code: new cql.Code('do', 're', 'mi'),
            presentOnAdmissionIndicator: new cql.Code('present', 'on', 'admission'),
            rank: 2
          })],
          participant: [
            new CarePartner({
              relationship: new cql.Code('fake', 'code', 'foo'),
              identifier: new Identifier({ namingSystem: "fake naming system", value: "fake value" })
            }),
            new Location({
              locationType: new cql.Code('fake', 'code', 'bar'),
              identifier: new Identifier({ namingSystem: "some other fake naming system", value: "some other fake value" })
            })
          ]
        }),
      ]
    });
    expect(qdmPatient.dataElements.length).toEqual(1);
    expect(qdmPatient.dataElements[0].diagnoses[0].rank).toEqual(2);
    expect(qdmPatient.dataElements[0].participant.length).toEqual(2);
    expect(qdmPatient.dataElements[0].participant[0].identifier.value).toEqual('fake value');
    expect(qdmPatient.dataElements[0].participant[0].qdmVersion).toEqual('5.6');
    expect(qdmPatient.dataElements[0].participant[1] instanceof Location).toBe(true);
    expect(qdmPatient.dataElements[0].participant[1].locationType).toEqual(new cql.Code('fake', 'code', 'bar'));
  });

  it('can initialize a data elements array JSON with a single entry without QDM:: in _type', () => {
    qdmPatient = new QDMPatient({
      birthDatetime: cql.DateTime.fromJSDate(new Date(), 0),
      qdmVersion: '0.0',
      dataElements: [{
        _type: "MedicationOrder"
      }]
    });
    expect(qdmPatient.dataElements.length).toEqual(1);
    expect(qdmPatient.dataElements[0]._type).toEqual('QDM::MedicationOrder');
    expect(qdmPatient.dataElements[0] instanceof MedicationOrder).toBe(true);
  });

  it('can initialize a data elements array with a multiple entries', () => {
    qdmPatient = new QDMPatient({
      birthDatetime: cql.DateTime.fromJSDate(new Date(), 0),
      qdmVersion: '0.0',
      dataElements: [new MedicationOrder(), new MedicationOrder()]
    });
    expect(qdmPatient.dataElements.length).toEqual(2);
  });

  it('initializes qdmPatients and data element IDs without a _type field', () => {
    qdmPatient = new QDMPatient({
      birthDatetime: cql.DateTime.fromJSDate(new Date(), 0),
      qdmVersion: '0.0',
      dataElements: [new MedicationOrder(), new MedicationOrder()]
    });
    expect(qdmPatient._type).toBeUndefined();
    expect(qdmPatient.dataElements[0].id._type).toBeUndefined();
    expect(qdmPatient.dataElements[0]._type).toEqual('QDM::MedicationOrder');
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
          new DeviceOrder(),
          new DeviceRecommended(),
          new DeviceRecommended(),
          new DeviceRecommended(),
        ]
      });
      expect(qdmPatient.getDataElements({qdmCategory: 'device'}).length).toEqual(4);
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
          new AssessmentOrder(),
          new AssessmentRecommended(),
          new AssessmentPerformed(),
          new ProviderCareExperience(),
          new CareGoal(),
          new CommunicationPerformed(),
          new Component(),
          new Diagnosis(),
          new DiagnosticStudyOrder(),
          new DiagnosticStudyPerformed(),
          new DiagnosticStudyRecommended(),
          new EncounterOrder(),
          new EncounterPerformed(),
          new EncounterRecommended(),
          new FacilityLocation(),
          new FamilyHistory(),
          new ImmunizationAdministered(),
          new ImmunizationOrder(),
          new InterventionOrder(),
          new InterventionPerformed(),
          new InterventionRecommended(),
          new LaboratoryTestOrder(),
          new LaboratoryTestPerformed(),
          new LaboratoryTestRecommended(),
          new MedicationActive(),
          new MedicationAdministered(),
          new MedicationDischarge(),
          new MedicationDispensed(),
          new Participation(),
          new PatientCareExperience(),
          new PatientCharacteristic(),
          new PatientCharacteristicBirthdate(),
          new PatientCharacteristicEthnicity(),
          new PatientCharacteristicExpired(),
          new PatientCharacteristicPayer(),
          new PatientCharacteristicClinicalTrialParticipant(),
          new PatientCharacteristicRace(),
          new PatientCharacteristicSex(),
          new PhysicalExamOrder(),
          new PhysicalExamPerformed(),
          new PhysicalExamRecommended(),
          new ProcedureOrder(),
          new ProcedurePerformed(),
          new ProcedureRecommended(),
          new ResultComponent(),
          new SubstanceAdministered(),
          new SubstanceOrder(),
          new SubstanceRecommended(),
          new Symptom(),
        ]
      });
      expect(qdmPatient.getDataElements().length).toEqual(51);
      expect(qdmPatient.adverse_events().length).toEqual(1);
      expect(qdmPatient.allergies().length).toEqual(1);
      expect(qdmPatient.assessments().length).toEqual(3);
      expect(qdmPatient.care_experiences().length).toEqual(2);
      expect(qdmPatient.care_goals().length).toEqual(1);
      expect(qdmPatient.communications().length).toEqual(1);
      expect(qdmPatient.conditions().length).toEqual(1);
      expect(qdmPatient.diagnostic_studies().length).toEqual(3);
      expect(qdmPatient.encounters().length).toEqual(3);
      expect(qdmPatient.family_history().length).toEqual(1);
      expect(qdmPatient.functional_statuses().length).toEqual(0);
      expect(qdmPatient.immunizations().length).toEqual(2);
      expect(qdmPatient.interventions().length).toEqual(3);
      expect(qdmPatient.laboratory_tests().length).toEqual(3);
      expect(qdmPatient.medical_equipment().length).toEqual(0);
      expect(qdmPatient.medications().length).toEqual(4);
      expect(qdmPatient.physical_exams().length).toEqual(3);
      expect(qdmPatient.preferences().length).toEqual(0);
      expect(qdmPatient.patient_characteristics().length).toEqual(8);
      expect(qdmPatient.procedures().length).toEqual(3);
      expect(qdmPatient.results().length).toEqual(0);
      expect(qdmPatient.risk_category_assessments().length).toEqual(0);
      expect(qdmPatient.social_history().length).toEqual(0);
      expect(qdmPatient.substances().length).toEqual(3);
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
    expect(qdmPatient.getByHqmfOid('2.16.840.1.113883.10.20.28.4.120').length).toEqual(1);
    expect(qdmPatient.getByHqmfOid('2.16.840.1.113883.10.20.28.4.7').length).toEqual(2);
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
        new EncounterPerformed(),
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
    expect(qdmPatient.findRecords('PositiveEncounterPerformed').length).toEqual(3);
  });

  it('can clear dataElementCache on request', () => {
    // run a findRecords call so cache is made
    expect(qdmPatient.findRecords('EncounterPerformed').length).toEqual(3);
    expect(QDMPatientSchema.dataElementCache).toBeDefined()
    expect(Object.keys(QDMPatientSchema.dataElementCache).length).toBe(1);
    expect(QDMPatientSchema.dataElementCachePatientId).toBeDefined()

    // clear cache
    QDMPatientSchema.clearDataElementCache();
    expect(QDMPatientSchema.dataElementCache).toBeNull();
    expect(QDMPatientSchema.dataElementCachePatientId).toBeNull();
  });
});

describe('CQMPatient', () => {
  it('can create a blank patient', () => {
    expect(() => {new Patient()}).not.toThrow();
  });

  it('initializes cqmPatients without a _type field', () => {
    patient = new Patient();
    expect(patient._type).toBeUndefined();
  });

  it('can construct a patient with data', () => {
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
      dataElements: [
        new EncounterPerformed({
          diagnoses: [new DiagnosisComponent({
            code: new cql.Code('do', 're', 'mi'),
            presentOnAdmissionIndicator: new cql.Code('present', 'on', 'admission'),
            rank: 2
          })],
          clazz: {
            code: 'fake',
            system: 'foo',
            version: 'bar',
            display: undefined
          }
        }),
      ]
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
    expect(patient.qdmPatient.dataElements[0].class.code).toEqual('fake');
    expect(patient.qdmPatient.dataElements[0].class.system).toEqual('foo');
    expect(patient.qdmPatient.dataElements[0].class.version).toEqual('bar');
  });

  it('can contain a qdm patient that has extendedData', () => {
    qdmData = new QDMPatient({
      birthDatetime: cql.DateTime.fromJSDate(new Date(), 0),
      qdmVersion: '0.0',
      extendedData: {
        description: 'A Description'
      }
    });
    patient = new Patient({
      givenNames: ['name1', 'name2'],
      familyName: 'foo',
      bundleId: '012210',
      expectedValues: [],
      notes: 'Random note for testing',
      qdmPatient: qdmData,
      measure_ids: ['ID123']
    });
    err = patient.validateSync();
    expect(err).toBeUndefined();
    expect(patient.qdmPatient.extendedData.description).toEqual('A Description');
    expect(patient.measure_ids[0]).toEqual('ID123');
  });
});

describe('Concept', () => {
  it('can create a Concept', () => {
    new Concept();
  });
});

describe('ValueSet', () => {
  it('can create a ValueSet', () => {
    new ValueSet();
  });
});

describe('PopulationSet', () => {

  it('can create an Observation', () => {
    new Observation();
  });

  it('can create a PopulationMap', () => {
    new PopulationMap();
  });

  it('gets rid of _id and _type when calling toObject on PopulationMap', () => {
    populationMap = new PopulationMap();
    objectPopulationMap = populationMap.toObject();
    expect(objectPopulationMap._id).toBeUndefined();
    expect(objectPopulationMap._type).toBeUndefined();
  });

  it('can create a PopulationSet', () => {
    new PopulationSet();
  });

  it('can create a Stratification', () => {
    new Stratification();
  });
});

describe('CQLLibrary', () => {
  it('defaults to be top level', () => {
    library = new CQLLibrary();
    expect(library.is_top_level).toBe(true);
  });

  it('can create a non top level CQLLibrary', () => {
    library = new CQLLibrary({ is_top_level: false });
    expect(library.is_top_level).toBe(false);
  });
});

describe('IndividualResult', () => {
  it('has empty observation_values by default', () => {
    result = new IndividualResult();
    expect(result.observation_values.length).toBe(0);
  });
});
