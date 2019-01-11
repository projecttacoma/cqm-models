const cql = require('cql-execution');
const Mongoose = require('mongoose');
const MedicationOrderSchema = require('./../../../app/assets/javascripts/index.js').MedicationOrderSchema;
const PatientSchema = require('./../../../app/assets/javascripts/index.js').PatientSchema;
const QDMPatientSchema = require('./../../../app/assets/javascripts/index.js').QDMPatientSchema;


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
