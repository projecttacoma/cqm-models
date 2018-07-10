const mongoose = require('mongoose');
const Code = require('./basetypes/Code');
const Interval = require('./basetypes/Interval');
const Quantity = require('./basetypes/Quantity');
const DateTime = require('./basetypes/DateTime');
const AllDataElements = require('./AllDataElements');

const [Schema, Number, String] = [
  mongoose.Schema,
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
];

const PatientSchema = new Schema({
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
  extendedData: {
    type: Mixed,
    default: {},
  },
}, { id: false });

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
  // If isNegated == true, only return data elements with a negationRationale that isn't null.
  // If isNegated == false, only return data elements with a null negationRationale.
  // If isNegated == null, return all matching data elements by type, regardless of negationRationale.
  const results = this.dataElements.filter(element => element._type === `QDM::${profile}` && (isNegated === null || !!element.negationRationale === isNegated));
  return results.map(result => AllDataElements[profile](result));
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
    const info = { birthDatetime: this.birthDatetime };
    return [info];
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

PatientSchema.methods.adverse_events = function adverse_events() {
  return this.getDataElements({ category: 'adverse_event' });
};

PatientSchema.methods.allergies = function allergies() {
  return this.getDataElements({ category: 'allergy' });
};

PatientSchema.methods.assessments = function assessments() {
  return this.getDataElements({ category: 'assessment' });
};

PatientSchema.methods.care_experiences = function care_experiences() {
  return this.getDataElements({ category: 'care_experience' });
};

PatientSchema.methods.care_goals = function care_goals() {
  return this.getDataElements({ category: 'care_goal' });
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

PatientSchema.methods.diagnostic_studies = function diagnostic_studies() {
  return this.getDataElements({ category: 'diagnostic_study' });
};

PatientSchema.methods.encounters = function encounters() {
  return this.getDataElements({ category: 'encounter' });
};

PatientSchema.methods.family_history = function family_history() {
  return this.getDataElements({ category: 'family_history' });
};

PatientSchema.methods.functional_statuses = function functional_statuses() {
  return this.getDataElements({ category: 'functional_status' });
};

PatientSchema.methods.immunizations = function immunizations() {
  return this.getDataElements({ category: 'immunization' });
};

PatientSchema.methods.interventions = function interventions() {
  return this.getDataElements({ category: 'intervention' });
};

PatientSchema.methods.laboratory_tests = function laboratory_tests() {
  return this.getDataElements({ category: 'laboratory_test' });
};

PatientSchema.methods.medical_equipment = function medical_equipment() {
  return this.getDataElements({ category: 'medical_equipment' });
};

PatientSchema.methods.medications = function medications() {
  return this.getDataElements({ category: 'medication' });
};

PatientSchema.methods.physical_exams = function physical_exams() {
  return this.getDataElements({ category: 'physical_exam' });
};

PatientSchema.methods.preferences = function preferences() {
  return this.getDataElements({ category: 'preference' });
};

PatientSchema.methods.provider_characteristics = function provider_characteristics() {
  return this.getDataElements({ category: 'provider_characteristic' });
};

PatientSchema.methods.procedures = function procedures() {
  return this.getDataElements({ category: 'procedure' });
};

PatientSchema.methods.results = function results() {
  return this.getDataElements({ category: 'result' });
};

PatientSchema.methods.risk_category_assessments = function risk_category_assessments() {
  return this.getDataElements({ category: 'risk_category_assessment' });
};

PatientSchema.methods.social_history = function social_history() {
  return this.getDataElements({ category: 'social_history' });
};

PatientSchema.methods.substances = function substances() {
  return this.getDataElements({ category: 'substance' });
};

PatientSchema.methods.symptoms = function symptoms() {
  return this.getDataElements({ category: 'symptom' });
};

PatientSchema.methods.system_characteristics = function system_characteristics() {
  return this.getDataElements({ category: 'system_characteristic' });
};

PatientSchema.methods.transfers = function transfers() {
  return this.getDataElements({ category: 'transfer' });
};

PatientSchema.methods.vital_signs = function vital_signs() {
  return this.getDataElements({ category: 'vital_sign' });
};

module.exports.PatientSchema = PatientSchema;
module.exports.Patient = mongoose.model('Patient', PatientSchema);
