var Schema = mongoose.Schema;
var Code = Schema.Types.Code;
var Interval = Schema.Types.Interval;
var Quantity = Schema.Types.Quantity;

var PatientSchema = new Schema({
  birth_datetime: DateTime,
  qdm_version: { type: String, default: "5.3" },
  ethnicity: Code,
  race: Code,
  sex: Code,
  // These are the "data criteria", or QDM datatype elements that exist on a
  // patient.
  history_elements: []
});

// Returns an array of history elements that exist on this patient, that
// match the given HQMF data criteria OID.
PatientSchema.methods.get_by_hqmf_oid = function get_by_hqmf_oid(hqmf_oid, callback) {
  return this.history_elements.filter(element => element.hqmf_oid === hqmf_oid);
}

// Returns an array of history elements that exist on this patient. Optionally
// takes a category, which returns all history elements of that QDM category.
// Example: patient.get_history_elements(category = 'encounters') will return
// all Encounter QDM data types active on the patient.
PatientSchema.methods.get_history_elements = function get_history_elements(category, callback) {
  return this.history_elements.filter(element => element.category === category);
}

PatientSchema.methods.adverse_events = function adverse_events(params, callback) {
  return this.get_history_elements('adverse_event');
}

PatientSchema.methods.assessments = function assessments(params, callback) {
  return this.get_history_elements('assessment');
}

PatientSchema.methods.allergies = function allergies(params, callback) {
  return this.get_history_elements('allergy');
}

PatientSchema.methods.care_goals = function care_goals(params, callback) {
  return this.get_history_elements('care_goal');
}

PatientSchema.methods.conditions = function conditions(params, callback) {
  return this.get_history_elements('condition');
}

PatientSchema.methods.encounters = function encounters(params, callback) {
  return this.get_history_elements('encounter');
}

PatientSchema.methods.communications = function communications(params, callback) {
  return this.get_history_elements('communication');
}

PatientSchema.methods.family_history = function family_history(params, callback) {
  return this.get_history_elements('family_history');
}

PatientSchema.methods.immunizations = function immunizations(params, callback) {
  return this.get_history_elements('immunization');
}

PatientSchema.methods.medical_equipment = function medical_equipment(params, callback) {
  return this.get_history_elements('medical_equipment');
}

PatientSchema.methods.medications = function medications(params, callback) {
  return this.get_history_elements('medication');
}

PatientSchema.methods.procedures = function procedures(params, callback) {
  return this.get_history_elements('procedure');
}

PatientSchema.methods.results = function results(params, callback) {
  return this.get_history_elements('result');
}

PatientSchema.methods.social_history = function social_history(params, callback) {
  return this.get_history_elements('social_history');
}

PatientSchema.methods.vital_signs = function vital_signs(params, callback) {
  return this.get_history_elements('vital_sign');
}

PatientSchema.methods.devices = function devices(params, callback) {
  return this.get_history_elements('device');
}

PatientSchema.methods.diagnostic_studies = function diagnostic_studies(params, callback) {
  return this.get_history_elements('diagnostic_study');
}

PatientSchema.methods.functional_statuses = function functional_statuses(params, callback) {
  return this.get_history_elements('functional_status');
}

PatientSchema.methods.interventions = function interventions(params, callback) {
  return this.get_history_elements('intervention');
}

PatientSchema.methods.laboratory_tests = function laboratory_tests(params, callback) {
  return this.get_history_elements('laboratory_test');
}

PatientSchema.methods.physical_exams = function physical_exams(params, callback) {
  return this.get_history_elements('physical_exam');
}

PatientSchema.methods.risk_category_assessments = function risk_category_assessments(params, callback) {
  return this.get_history_elements('risk_category_assessment');
}

PatientSchema.methods.care_experiences = function care_experiences(params, callback) {
  return this.get_history_elements('care_experience');
}

PatientSchema.methods.preferences = function preferences(params, callback) {
  return this.get_history_elements('preference');
}

PatientSchema.methods.provider_characteristics = function provider_characteristics(params, callback) {
  return this.get_history_elements('provider_characteristic');
}

PatientSchema.methods.substances = function substances(params, callback) {
  return this.get_history_elements('substance');
}

PatientSchema.methods.system_characteristics = function system_characteristics(params, callback) {
  return this.get_history_elements('system_characteristic');
}

PatientSchema.methods.transfers = function transfers(params, callback) {
  return this.get_history_elements('transfer');
}

var Patient = mongoose.model("Patient", PatientSchema);
