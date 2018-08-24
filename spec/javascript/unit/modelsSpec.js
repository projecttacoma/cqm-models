const Mongoose = require('mongoose');
const QDMPatientSchema = require('./../../../app/assets/javascripts/index.js').PatientSchema;

describe('QDMPatient', () => {
  it('basic test', () => {
    const QDMPatient = Mongoose.model('QDMPatient', QDMPatientSchema);
    expect(() => {new QDMPatient()}).not.toThrow();
  });
});
