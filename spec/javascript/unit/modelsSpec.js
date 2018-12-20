const Mongoose = require('mongoose');
const QDMPatientSchema = require('./../../../app/assets/javascripts/index.js').QDMPatientSchema;
const PatientSchema = require('./../../../app/assets/javascripts/index.js').PatientSchema;
const cql = require('cql-execution');


describe('QDMPatient', () => {
  it('can create a blank patient', () => {
    const QDMPatient = Mongoose.model('QDMPatient', QDMPatientSchema);
    expect(() => {new QDMPatient()}).not.toThrow();
  });

  it('can construct a patient with data', () => {
    const QDMPatient = Mongoose.model('QDMPatient', QDMPatientSchema);
    qdmPatient = new QDMPatient({
      birthDatetime: cql.DateTime.fromJSDate(new Date(), 0),
      qdmVersion: '0.0',
    });
    err = qdmPatient.validateSync();
    expect(err).toBeUndefined();
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

  it('can contain a qdm data', () => {
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
    expect(patient.qdmPatient).toBeDefined()
  });
});
