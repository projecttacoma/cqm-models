const mongoose = require('mongoose');

var DataElement = require('./basetypes/DataElement');
var Schema = mongoose.Schema;
var Code = Schema.Types.Code;
var Interval = Schema.Types.Interval;
var Quantity = Schema.Types.Quantity;
var Integer = Schema.Types.Integer;
var Array = Schema.Types.Array;
var String = Schema.Types.String;
var Float = Schema.Types.Float;
var Time = Schema.Types.Time;

var PatientSchema = DataElement.extendSchema(DataElement.DataElementSchema, {
  birth_datetime: DateTime,
  qdm_version: { type: String, default: "5.3" },
  given_names: [String],
  family_name: String,
  bundle_id: String,
  // These are the "data criteria", or QDM datatype elements that exist on a
  // patient.
  data_elements: []
});

// Returns an array of elements that exist on this patient, that
// match the given HQMF data criteria OID.
PatientSchema.methods.get_by_hqmf_oid = function get_by_hqmf_oid(hqmf_oid, callback) {
  return this.data_elements.filter(element => element.hqmf_oid === hqmf_oid);
}

// Returns an array of elements that exist on this patient, that
// match the given QRDA data criteria OID.
PatientSchema.methods.get_by_qrda_oid = function get_by_qrda_oid(qrda_oid, callback) {
  return this.data_elements.filter(element => element.qrda_oid === qrda_oid);
}

// Returns an array of elements that exist on this patient. Optionally
// takes a category, which returns all elements of that QDM category.
// Example: patient.get_data_elements(category = 'encounters') will return
// all Encounter QDM data types active on the patient.
PatientSchema.methods.get_data_elements = function get_data_elements(params, callback) {
  if (params['category'] && params['status']) {
    return this.data_elements.filter(element => (element.category === category) && (element.status === status));
  } else if (params['category']) {
    return this.data_elements.filter(element => element.category === category);
  } else {
    return this.data_elements;
  }
}

// Return the Mongo id for this patient.
PatientSchema.methods.id = function id(params, callback) {
  return this._id;
}

PatientSchema.methods.adverse_events = function adverse_events(params, callback) {
  return this.get_data_elements({'category': 'adverse_event'});
}

PatientSchema.methods.allergies = function allergies(params, callback) {
  return this.get_data_elements({'category': 'allergy'});
}

PatientSchema.methods.assessments = function assessments(params, callback) {
  return this.get_data_elements({'category': 'assessment'});
}

PatientSchema.methods.care_experiences = function care_experiences(params, callback) {
  return this.get_data_elements({'category': 'care_experience'});
}

PatientSchema.methods.care_goals = function care_goals(params, callback) {
  return this.get_data_elements({'category': 'care_goal'});
}

PatientSchema.methods.communications = function communications(params, callback) {
  return this.get_data_elements({'category': 'communication'});
}

PatientSchema.methods.conditions = function conditions(params, callback) {
  return this.get_data_elements({'category': 'condition'});
}

PatientSchema.methods.devices = function devices(params, callback) {
  return this.get_data_elements({'category': 'device'});
}

PatientSchema.methods.diagnostic_studies = function diagnostic_studies(params, callback) {
  return this.get_data_elements({'category': 'diagnostic_study'});
}

PatientSchema.methods.encounters = function encounters(params, callback) {
  return this.get_data_elements({'category': 'encounter'});
}

PatientSchema.methods.family_history = function family_history(params, callback) {
  return this.get_data_elements({'category': 'family_history'});
}

PatientSchema.methods.functional_statuses = function functional_statuses(params, callback) {
  return this.get_data_elements({'category': 'functional_status'});
}

PatientSchema.methods.immunizations = function immunizations(params, callback) {
  return this.get_data_elements({'category': 'immunization'});
}

PatientSchema.methods.interventions = function interventions(params, callback) {
  return this.get_data_elements({'category': 'intervention'});
}

PatientSchema.methods.laboratory_tests = function laboratory_tests(params, callback) {
  return this.get_data_elements({'category': 'laboratory_test'});
}

PatientSchema.methods.medical_equipment = function medical_equipment(params, callback) {
  return this.get_data_elements({'category': 'medical_equipment'});
}

PatientSchema.methods.medications = function medications(params, callback) {
  return this.get_data_elements({'category': 'medication'});
}

PatientSchema.methods.physical_exams = function physical_exams(params, callback) {
  return this.get_data_elements({'category': 'physical_exam'});
}

PatientSchema.methods.preferences = function preferences(params, callback) {
  return this.get_data_elements({'category': 'preference'});
}

PatientSchema.methods.provider_characteristics = function provider_characteristics(params, callback) {
  return this.get_data_elements({'category': 'provider_characteristic'});
}

PatientSchema.methods.procedures = function procedures(params, callback) {
  return this.get_data_elements({'category': 'procedure'});
}

PatientSchema.methods.results = function results(params, callback) {
  return this.get_data_elements({'category': 'result'});
}

PatientSchema.methods.risk_category_assessments = function risk_category_assessments(params, callback) {
  return this.get_data_elements({'category': 'risk_category_assessment'});
}

PatientSchema.methods.social_history = function social_history(params, callback) {
  return this.get_data_elements({'category': 'social_history'});
}

PatientSchema.methods.substances = function substances(params, callback) {
  return this.get_data_elements({'category': 'substance'});
}

PatientSchema.methods.symptoms = function symptoms(params, callback) {
  return this.get_data_elements({'category': 'symptom'});
}

PatientSchema.methods.system_characteristics = function system_characteristics(params, callback) {
  return this.get_data_elements({'category': 'system_characteristic'});
}

PatientSchema.methods.transfers = function transfers(params, callback) {
  return this.get_data_elements({'category': 'transfer'});
}

PatientSchema.methods.vital_signs = function vital_signs(params, callback) {
  return this.get_data_elements({'category': 'vital_sign'});
}


module.exports = mongoose.model("Patient", PatientSchema);
