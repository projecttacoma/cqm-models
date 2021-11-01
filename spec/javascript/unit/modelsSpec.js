const cql = require('cql-execution');
const Mongoose = require('mongoose/browser');

// Data Element Schemas
const AdverseEvent = require('./../../../app/assets/javascripts/AdverseEvent').AdverseEvent;
const AllergyIntolerance = require('./../../../app/assets/javascripts/AllergyIntolerance').AllergyIntolerance;
const AssessmentOrder = require('./../../../app/assets/javascripts/AssessmentOrder').AssessmentOrder;
const AssessmentPerformed = require('./../../../app/assets/javascripts/AssessmentPerformed').AssessmentPerformed;
const AssessmentRecommended = require('./../../../app/assets/javascripts/AssessmentRecommended').AssessmentRecommended;
const ProviderCareExperience = require('./../../../app/assets/javascripts/ProviderCareExperience').ProviderCareExperience;
const CareGoal = require('./../../../app/assets/javascripts/CareGoal').CareGoal;
const CarePartner = require('./../../../app/assets/javascripts/attributes/CarePartner').CarePartner;
const Location = require('./../../../app/assets/javascripts/attributes/Location').Location;
const Concept = require('./../../../app/assets/javascripts/cqm/Concept').Concept;
const Component = require('./../../../app/assets/javascripts/attributes/Component').Component;
const CommunicationPerformed = require('./../../../app/assets/javascripts/CommunicationPerformed').CommunicationPerformed;
const CQLLibrary = require('./../../../app/assets/javascripts/cqm/CQLLibrary').CQLLibrary;
const DateTime = require('./../../../app/assets/javascripts/basetypes/DateTime');
const QDMDate = require('../../../app/assets/javascripts/basetypes/QDMDate');
const Diagnosis = require('./../../../app/assets/javascripts/Diagnosis').Diagnosis;
const DiagnosisComponent = require('./../../../app/assets/javascripts/attributes/DiagnosisComponent').DiagnosisComponent;
const DeviceOrder = require('./../../../app/assets/javascripts/DeviceOrder').DeviceOrder;
const DeviceRecommended = require('./../../../app/assets/javascripts/DeviceRecommended').DeviceRecommended;
const DiagnosticStudyOrder = require('./../../../app/assets/javascripts/DiagnosticStudyOrder').DiagnosticStudyOrder;
const DiagnosticStudyPerformed = require('./../../../app/assets/javascripts/DiagnosticStudyPerformed').DiagnosticStudyPerformed;
const DiagnosticStudyRecommended = require('./../../../app/assets/javascripts/DiagnosticStudyRecommended').DiagnosticStudyRecommended;
const EncounterOrder = require('./../../../app/assets/javascripts/EncounterOrder').EncounterOrder;
const EncounterPerformed = require('./../../../app/assets/javascripts/EncounterPerformed').EncounterPerformed;
const EncounterRecommended = require('./../../../app/assets/javascripts/EncounterRecommended').EncounterRecommended;
const FacilityLocation = require('./../../../app/assets/javascripts/attributes/FacilityLocation').FacilityLocation;
const FamilyHistory = require('./../../../app/assets/javascripts/FamilyHistory').FamilyHistory;
const Identifier = require('./../../../app/assets/javascripts/attributes/Identifier').Identifier;
const ImmunizationAdministered = require('./../../../app/assets/javascripts/ImmunizationAdministered').ImmunizationAdministered;
const ImmunizationOrder = require('./../../../app/assets/javascripts/ImmunizationOrder').ImmunizationOrder;
const IndividualResult = require('./../../../app/assets/javascripts/cqm/IndividualResult').IndividualResult;
const InterventionOrder = require('./../../../app/assets/javascripts/InterventionOrder').InterventionOrder;
const InterventionPerformed = require('./../../../app/assets/javascripts/InterventionPerformed').InterventionPerformed;
const InterventionRecommended = require('./../../../app/assets/javascripts/InterventionRecommended').InterventionRecommended;
const LaboratoryTestOrder = require('./../../../app/assets/javascripts/LaboratoryTestOrder').LaboratoryTestOrder;
const LaboratoryTestPerformed = require('./../../../app/assets/javascripts/LaboratoryTestPerformed').LaboratoryTestPerformed;
const LaboratoryTestRecommended = require('./../../../app/assets/javascripts/LaboratoryTestRecommended').LaboratoryTestRecommended;
const MedicationActive = require('./../../../app/assets/javascripts/MedicationActive').MedicationActive;
const MedicationAdministered = require('./../../../app/assets/javascripts/MedicationAdministered').MedicationAdministered;
const MedicationDischarge = require('./../../../app/assets/javascripts/MedicationDischarge').MedicationDischarge;
const MedicationDispensed = require('./../../../app/assets/javascripts/MedicationDispensed').MedicationDispensed;
const MedicationOrder = require('./../../../app/assets/javascripts/MedicationOrder').MedicationOrder;
const Observation = require('./../../../app/assets/javascripts/cqm/PopulationSet').Observation;
const Participation = require('./../../../app/assets/javascripts/Participation').Participation;
const Patient = require('./../../../app/assets/javascripts/cqm/Patient').Patient;
const PatientCareExperience = require('./../../../app/assets/javascripts/PatientCareExperience').PatientCareExperience;
const PatientCharacteristic = require('./../../../app/assets/javascripts/PatientCharacteristic').PatientCharacteristic;
const PatientCharacteristicBirthdate = require('./../../../app/assets/javascripts/PatientCharacteristicBirthdate').PatientCharacteristicBirthdate;
const PatientCharacteristicEthnicity = require('./../../../app/assets/javascripts/PatientCharacteristicEthnicity').PatientCharacteristicEthnicity;
const PatientCharacteristicExpired = require('./../../../app/assets/javascripts/PatientCharacteristicExpired').PatientCharacteristicExpired;
const PatientCharacteristicPayer = require('./../../../app/assets/javascripts/PatientCharacteristicPayer').PatientCharacteristicPayer;
const PatientCharacteristicClinicalTrialParticipant = require('./../../../app/assets/javascripts/PatientCharacteristicClinicalTrialParticipant').PatientCharacteristicClinicalTrialParticipant;
const PatientCharacteristicRace = require('./../../../app/assets/javascripts/PatientCharacteristicRace').PatientCharacteristicRace;
const PatientCharacteristicSex = require('./../../../app/assets/javascripts/PatientCharacteristicSex').PatientCharacteristicSex;
const PhysicalExamOrder = require('./../../../app/assets/javascripts/PhysicalExamOrder').PhysicalExamOrder;
const PhysicalExamPerformed = require('./../../../app/assets/javascripts/PhysicalExamPerformed').PhysicalExamPerformed;
const PhysicalExamRecommended = require('./../../../app/assets/javascripts/PhysicalExamRecommended').PhysicalExamRecommended;
const PopulationMap = require('./../../../app/assets/javascripts/cqm/PopulationSet').PopulationMap;
const PopulationSet = require('./../../../app/assets/javascripts/cqm/PopulationSet').PopulationSet;
const ProcedureOrder = require('./../../../app/assets/javascripts/ProcedureOrder').ProcedureOrder;
const ProcedurePerformed = require('./../../../app/assets/javascripts/ProcedurePerformed').ProcedurePerformed;
const ProcedureRecommended = require('./../../../app/assets/javascripts/ProcedureRecommended').ProcedureRecommended;
const QDMPatient = require('./../../../app/assets/javascripts/QDMPatient').QDMPatient;
const QDMPatientSchema = require('./../../../app/assets/javascripts/QDMPatient').QDMPatientSchema;
const ResultComponent = require('./../../../app/assets/javascripts/attributes/ResultComponent').ResultComponent;
const Stratification = require('./../../../app/assets/javascripts/cqm/PopulationSet').Stratification;
const SubstanceAdministered = require('./../../../app/assets/javascripts/SubstanceAdministered').SubstanceAdministered;
const SubstanceOrder = require('./../../../app/assets/javascripts/SubstanceOrder').SubstanceOrder;
const SubstanceRecommended = require('./../../../app/assets/javascripts/SubstanceRecommended').SubstanceRecommended;
const Symptom = require('./../../../app/assets/javascripts/Symptom').Symptom;
const ValueSet = require('./../../../app/assets/javascripts/cqm/ValueSet').ValueSet;

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
              identifier: new Identifier({
                namingSystem: "fake naming system",
                value: "fake value"
                })
              }),
              new Location({
                locationType: new cql.Code('fake', 'code', 'bar'),
                identifier: new Identifier({
                  namingSystem: "some other fake naming system",
                  value: "some other fake value"
                })
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
