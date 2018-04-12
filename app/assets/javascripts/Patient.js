const mongoose = require('mongoose');
const { DataElementSchema } = require('./basetypes/DataElement');
const Code = require('./basetypes/Code');
const Interval = require('./basetypes/Interval');
const Quantity = require('./basetypes/Quantity');
const DateTime = require('./basetypes/DateTime');

const [Number, String] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
];

const PatientSchema = DataElementSchema({
  birthDatetime: DateTime,
  qdmVersion: { type: String, default: '5.3' },
  _type: { type: String, default: 'Patient' },
  givenNames: [String],
  familyName: String,
  bundleId: String,
  // These are the "data criteria", or QDM datatype elements that exist on a
  // patient.
  dataElements: [],
  // This field is for application specific information only. If both Bonnie
  // Cypress use a common field, it should be made a field on this model,
  // and not put into extendedData.
  extendedData: {},
}, { id: false });

const AllDataElements = require('./AllDataElements');

// After initialization of a Patient model, initialize every individual data element
// to its respective Mongoose Model
PatientSchema.methods.initializeDataElements = function initializeDataElements() {
  let typeStripped;
  const dataElementsInit = [];
  this.dataElements.forEach((element) => {
    typeStripped = element._type.replace(/QDM::/, '');
    if (typeStripped in AllDataElements) {
      dataElementsInit.push(AllDataElements[typeStripped](element));
    } else {
      dataElementsInit.push(element);
    }
  });
  this.set({ dataElements: dataElementsInit });
};

PatientSchema.queue('initializeDataElements');

PatientSchema.methods.id = function id() {
  return this._id;
};

// Returns an array of elements that exist on this patient, that
// match the given HQMF data criteria OID.
PatientSchema.methods.getByHqmfOid = function getByHqmfOid(hqmfOid) {
  return this.dataElements.filter(element => element.hqmfOid === hqmfOid);
};

// Returns an array of elements that exist on this patient, that
// match the given QRDA data criteria OID.
PatientSchema.methods.getByQrdaOid = function getByQrdaOid(qrdaOid) {
  return this.dataElements.filter(element => element.qrdaOid === qrdaOid);
};

// Returns an array of elements that exist on this patient. Optionally
// takes a category, which returns all elements of that QDM category.
// Example: patient.getDataElements(category = 'encounters') will return
// all Encounter QDM data types active on the patient.
PatientSchema.methods.getDataElements = function getDataElements(params) {
  if (params.category && params.qdmStatus) {
    return this.dataElements.filter(element => (element.category === params.category) && (element.qdmStatus === params.qdmStatus));
  } else if (params.category) {
    return this.dataElements.filter(element => element.category === params.category);
  }
  return this.dataElements;
};

// Returns an array of dataElements that exist on the patient, queried by
// QDM profile
PatientSchema.methods.getByProfile = function getByProfile(profile, isNegated = null) {
  if (isNegated === true) {
    return this.dataElements.filter(element => element._type === `QDM::${profile}` && (typeof element.negationRationale !== 'undefined' && element.negationRationale != null));
  } else if (isNegated === false) {
    return this.dataElements.filter(element => element._type === `QDM::${profile}` && (typeof element.negationRationale === 'undefined' || element.negationRationale == null));
  }
  return this.dataElements.filter(element => element._type === `QDM::${profile}`);
};

// This method is called by the CQL execution engine on a CQLPatient when
// the execution engine wants information on a record. A record could be patient
// characteristic information about the patient, or it could be data criteria
// that currently exist on this patient (data criteria you drag on a patient
// in Bonnie's patient builder).
// @param {String} profile - the data criteria requested by the execution engine
// @returns {Object}
PatientSchema.methods.findRecords = function findRecords(profile) {
  let profileStripped;
  if (profile === 'Patient') {
    // Requested generic patient info
    return { birthDatetime: this.birthDatetime };
  } else if (/PatientCharacteristic/.test(profile)) {
    // Requested a patient characteristic
    profileStripped = profile.replace(/ *\{[^)]*\} */g, '');
    return this.getByProfile(profileStripped);
  } else if (profile != null) {
    // Requested something else (probably a QDM data type).

    // Strip model details from request. The requested profile string contains
    // a lot of things we don't need or care about. Example, we might see
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

PatientSchema.methods.adverseEvents = function adverseEvents() {
  return this.getDataElements({ category: 'adverseEvent' });
};

PatientSchema.methods.allergies = function allergies() {
  return this.getDataElements({ category: 'allergy' });
};

PatientSchema.methods.assessments = function assessments() {
  return this.getDataElements({ category: 'assessment' });
};

PatientSchema.methods.careExperiences = function careExperiences() {
  return this.getDataElements({ category: 'careExperience' });
};

PatientSchema.methods.careGoals = function careGoals() {
  return this.getDataElements({ category: 'careGoal' });
};

PatientSchema.methods.communications = function communications() {
  return this.getDataElements({ category: 'communication' });
};

PatientSchema.methods.conditions = function conditions() {
  return this.getDataElements({ category: 'condition' });
};

PatientSchema.methods.devices = function devices() {
  return this.getDataElements({ category: 'device' });
};

PatientSchema.methods.diagnosticStudies = function diagnosticStudies() {
  return this.getDataElements({ category: 'diagnosticStudy' });
};

PatientSchema.methods.encounters = function encounters() {
  return this.getDataElements({ category: 'encounter' });
};

PatientSchema.methods.familyHistory = function familyHistory() {
  return this.getDataElements({ category: 'familyHistory' });
};

PatientSchema.methods.functionalStatuses = function functionalStatuses() {
  return this.getDataElements({ category: 'functionalStatus' });
};

PatientSchema.methods.immunizations = function immunizations() {
  return this.getDataElements({ category: 'immunization' });
};

PatientSchema.methods.interventions = function interventions() {
  return this.getDataElements({ category: 'intervention' });
};

PatientSchema.methods.laboratoryTests = function laboratoryTests() {
  return this.getDataElements({ category: 'laboratoryTest' });
};

PatientSchema.methods.medicalEquipment = function medicalEquipment() {
  return this.getDataElements({ category: 'medicalEquipment' });
};

PatientSchema.methods.medications = function medications() {
  return this.getDataElements({ category: 'medication' });
};

PatientSchema.methods.physicalExams = function physicalExams() {
  return this.getDataElements({ category: 'physicalExam' });
};

PatientSchema.methods.preferences = function preferences() {
  return this.getDataElements({ category: 'preference' });
};

PatientSchema.methods.providerCharacteristics = function providerCharacteristics() {
  return this.getDataElements({ category: 'providerCharacteristic' });
};

PatientSchema.methods.procedures = function procedures() {
  return this.getDataElements({ category: 'procedure' });
};

PatientSchema.methods.results = function results() {
  return this.getDataElements({ category: 'result' });
};

PatientSchema.methods.riskCategoryAssessments = function riskCategoryAssessments() {
  return this.getDataElements({ category: 'riskCategoryAssessment' });
};

PatientSchema.methods.socialHistory = function socialHistory() {
  return this.getDataElements({ category: 'socialHistory' });
};

PatientSchema.methods.substances = function substances() {
  return this.getDataElements({ category: 'substance' });
};

PatientSchema.methods.symptoms = function symptoms() {
  return this.getDataElements({ category: 'symptom' });
};

PatientSchema.methods.systemCharacteristics = function systemCharacteristics() {
  return this.getDataElements({ category: 'systemCharacteristic' });
};

PatientSchema.methods.transfers = function transfers() {
  return this.getDataElements({ category: 'transfer' });
};

PatientSchema.methods.vitalSigns = function vitalSigns() {
  return this.getDataElements({ category: 'vitalSign' });
};

module.exports.PatientSchema = PatientSchema;
module.exports.Patient = mongoose.model('Patient', PatientSchema);
