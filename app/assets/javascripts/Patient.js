const mongoose = require('mongoose');
const DataElement = require('./basetypes/DataElement');
const Code = require('./basetypes/Code');
const Interval = require('./basetypes/Interval');
const Quantity = require('./basetypes/Quantity');

const [Number, String, Date] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Date,
];

const PatientSchema = DataElement.extendSchema(DataElement.DataElementSchema, {
  birth_datetime: Date,
  qdm_version: { type: String, default: '5.3' },
  _type: { type: String, default: 'Patient' },
  given_names: [String],
  family_name: String,
  bundle_id: String,
  // These are the "data criteria", or QDM datatype elements that exist on a
  // patient.
  data_elements: [],
});

// Returns an array of elements that exist on this patient, that
// match the given HQMF data criteria OID.
PatientSchema.methods.get_by_hqmf_oid = function get_by_hqmf_oid(hqmfOid) {
  return this.data_elements.filter(element => element.hqmf_oid === hqmfOid);
};

// Returns an array of elements that exist on this patient, that
// match the given QRDA data criteria OID.
PatientSchema.methods.get_by_qrda_oid = function get_by_qrda_oid(qrdaOid) {
  return this.data_elements.filter(element => element.qrda_oid === qrdaOid);
};

// Returns an array of elements that exist on this patient. Optionally
// takes a category, which returns all elements of that QDM category.
// Example: patient.get_data_elements(category = 'encounters') will return
// all Encounter QDM data types active on the patient.
PatientSchema.methods.get_data_elements = function get_data_elements(params) {
  if (params.category && params.qdm_status) {
    return this.data_elements.filter(element => (element.category === params.category) && (element.qdm_status === params.qdm_status));
  } else if (params.category) {
    return this.data_elements.filter(element => element.category === params.category);
  }
  return this.data_elements;
};

PatientSchema.methods.adverse_events = function adverse_events() {
  return this.get_data_elements({ category: 'adverse_event' });
};

PatientSchema.methods.allergies = function allergies() {
  return this.get_data_elements({ category: 'allergy' });
};

PatientSchema.methods.assessments = function assessments() {
  return this.get_data_elements({ category: 'assessment' });
};

PatientSchema.methods.care_experiences = function care_experiences() {
  return this.get_data_elements({ category: 'care_experience' });
};

PatientSchema.methods.care_goals = function care_goals() {
  return this.get_data_elements({ category: 'care_goal' });
};

PatientSchema.methods.communications = function communications() {
  return this.get_data_elements({ category: 'communication' });
};

PatientSchema.methods.conditions = function conditions() {
  return this.get_data_elements({ category: 'condition' });
};

PatientSchema.methods.devices = function devices() {
  return this.get_data_elements({ category: 'device' });
};

PatientSchema.methods.diagnostic_studies = function diagnostic_studies() {
  return this.get_data_elements({ category: 'diagnostic_study' });
};

PatientSchema.methods.encounters = function encounters() {
  return this.get_data_elements({ category: 'encounter' });
};

PatientSchema.methods.family_history = function family_history() {
  return this.get_data_elements({ category: 'family_history' });
};

PatientSchema.methods.functional_statuses = function functional_statuses() {
  return this.get_data_elements({ category: 'functional_status' });
};

PatientSchema.methods.immunizations = function immunizations() {
  return this.get_data_elements({ category: 'immunization' });
};

PatientSchema.methods.interventions = function interventions() {
  return this.get_data_elements({ category: 'intervention' });
};

PatientSchema.methods.laboratory_tests = function laboratory_tests() {
  return this.get_data_elements({ category: 'laboratory_test' });
};

PatientSchema.methods.medical_equipment = function medical_equipment() {
  return this.get_data_elements({ category: 'medical_equipment' });
};

PatientSchema.methods.medications = function medications() {
  return this.get_data_elements({ category: 'medication' });
};

PatientSchema.methods.physical_exams = function physical_exams() {
  return this.get_data_elements({ category: 'physical_exam' });
};

PatientSchema.methods.preferences = function preferences() {
  return this.get_data_elements({ category: 'preference' });
};

PatientSchema.methods.provider_characteristics = function provider_characteristics() {
  return this.get_data_elements({ category: 'provider_characteristic' });
};

PatientSchema.methods.procedures = function procedures() {
  return this.get_data_elements({ category: 'procedure' });
};

PatientSchema.methods.results = function results() {
  return this.get_data_elements({ category: 'result' });
};

PatientSchema.methods.risk_category_assessments = function risk_category_assessments() {
  return this.get_data_elements({ category: 'risk_category_assessment' });
};

PatientSchema.methods.social_history = function social_history() {
  return this.get_data_elements({ category: 'social_history' });
};

PatientSchema.methods.substances = function substances() {
  return this.get_data_elements({ category: 'substance' });
};

PatientSchema.methods.symptoms = function symptoms() {
  return this.get_data_elements({ category: 'symptom' });
};

PatientSchema.methods.system_characteristics = function system_characteristics() {
  return this.get_data_elements({ category: 'system_characteristic' });
};

PatientSchema.methods.transfers = function transfers() {
  return this.get_data_elements({ category: 'transfer' });
};

PatientSchema.methods.vital_signs = function vital_signs() {
  return this.get_data_elements({ category: 'vital_sign' });
};

module.exports.PatientSchema = PatientSchema;
module.exports.Patient = mongoose.model('Patient', PatientSchema);
