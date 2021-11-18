const mongoose = require('mongoose/browser');
const Code = require('./basetypes/Code');
const Interval = require('./basetypes/Interval');
const Quantity = require('./basetypes/Quantity');
const DateTime = require('./basetypes/DateTime');
const AllDataElements = require('./AllDataElements');

const [Schema, Number, String, Mixed] = [
  mongoose.Schema,
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Mixed,
];

const QDMPatientSchema = new Schema({
  birthDatetime: DateTime,
  qdmVersion: { type: String, default: '5.6' },

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
QDMPatientSchema.methods.initializeDataElements = function initializeDataElements() {
  let typeStripped;
  const dataElementsInit = [];
  this.dataElements.forEach((element) => {
    typeStripped = element._type.replace(/QDM::/, '');
    dataElementsInit.push(new AllDataElements[typeStripped](element));
  });
  this.set({ dataElements: dataElementsInit });
};

QDMPatientSchema.methods.id = function id() {
  return this._id;
};

// Returns an array of elements that exist on this patient, that
// match the given HQMF data criteria OID.
QDMPatientSchema.methods.getByHqmfOid = function getByHqmfOid(hqmfOid) {
  return this.dataElements.filter(element => element.hqmfOid === hqmfOid);
};

// Returns an array of elements that exist on this patient, that
// match the given QRDA data criteria OID.
QDMPatientSchema.methods.getByQrdaOid = function getByQrdaOid(qrdaOid) {
  return this.dataElements.filter(element => element.qrdaOid === qrdaOid);
};

// cql-execution prefers getId() over id() because some data models may have an id property
QDMPatientSchema.methods.getId = function getId() {
  return this._id;
};

/* eslint no-underscore-dangle: 0 */
QDMPatientSchema.methods._is = function _is(typeSpecifier) {
  return this._typeHierarchy().some(
    t => t.type === typeSpecifier.type && t.name === typeSpecifier.name
  );
};

/* eslint no-underscore-dangle: 0 */
QDMPatientSchema.methods._typeHierarchy = function _typeHierarchy() {
  const ver = this.qdmVersion.replace('.', '_');
  return [
    {
      name: `{urn:healthit-gov:qdm:v${ver}}Patient`,
      type: 'NamedTypeSpecifier',
    },
    { name: '{urn:hl7-org:elm-types:r1}Tuple', type: 'NamedTypeSpecifier' },
    { name: '{urn:hl7-org:elm-types:r1}Any', type: 'NamedTypeSpecifier' },
  ];
};

// Returns an array of elements that exist on this patient. Optionally
// takes a qdmCategory, which returns all elements of that QDM qdmCategory.
// Example: patient.getDataElements({qdmCategory: 'encounters'}) will return
// all Encounter QDM data types active on the patient.
QDMPatientSchema.methods.getDataElements = function getDataElements(params) {
  if (params !== undefined && params.qdmCategory !== undefined && params.qdmStatus !== undefined) {
    return this.dataElements.filter(element => (element.qdmCategory === params.qdmCategory) && (element.qdmStatus === params.qdmStatus));
  } else if (params !== undefined && params.qdmCategory !== undefined) {
    return this.dataElements.filter(element => element.qdmCategory === params.qdmCategory);
  }
  return this.dataElements;
};

// Returns an array of dataElements that exist on the patient, queried by
// QDM profile
// @param {string} profile - the data criteria requested by the execution engine
// @param {boolean} isNegated - whether dataElements should be returned based on their negation status
// @returns {DataElement[]}
QDMPatientSchema.methods.getByProfile = function getByProfile(profile, isNegated = null) {
  // If isNegated == true, only return data elements with a negationRationale that is not null.
  // If isNegated == false, only return data elements with a null negationRationale.
  // If isNegated == null, return all matching data elements by type, regardless of negationRationale.
  const results = this.dataElements.filter(element => (element._type === `QDM::${profile}` || element._type === profile) && (isNegated === null || !!element.negationRationale === isNegated));
  return results.map((result) => {
    const removedMongooseItems = new AllDataElements[profile](result).toObject({ virtuals: true });
    // toObject() will remove all mongoose functions but also remove the schema methods, so we add them back
    Object.entries(result.schema.methods).forEach(([method_name, method]) => {
      removedMongooseItems[method_name] = method;
    });
    return removedMongooseItems;
  });
};

// This method is called by the CQL execution engine on a CQLPatient when
// the execution engine wants information on a record. A record could be patient
// characteristic information about the patient, or it could be data criteria
// that currently exist on this patient (data criteria you drag on a patient
// in Bonnie patient builder).
// @param {String} profile - the data criteria requested by the execution engine
// @returns {Object}
QDMPatientSchema.methods.findRecords = function findRecords(profile) {
  // Clear profile cache for this patient if there is no cache or the patient has changed
  if (QDMPatientSchema.dataElementCache == null
    || QDMPatientSchema.dataElementCachePatientId !== this._id) {
    QDMPatientSchema.dataElementCache = {};
    QDMPatientSchema.dataElementCachePatientId = this._id;
  }
  // If there is a cache 'hit', return it
  if (Object.prototype.hasOwnProperty.call(QDMPatientSchema.dataElementCache, profile)) {
    return QDMPatientSchema.dataElementCache[profile];
  }
  let profileStripped;
  if (profile === 'Patient') {
    // Requested generic patient info
    const info = { birthDatetime: this.birthDatetime };
    QDMPatientSchema.dataElementCache[profile] = [info];
    return [info];
  } else if (/PatientCharacteristic/.test(profile)) {
    // Requested a patient characteristic
    profileStripped = profile.replace(/ *\{[^)]*\} */g, '');
    QDMPatientSchema.dataElementCache[profile] = this.getByProfile(profileStripped);
    return QDMPatientSchema.dataElementCache[profile];
  } else if (profile != null) {
    // Requested something else (probably a QDM data type).

    // Strip model details from request. The requested profile string contains
    // a lot of things we do not need or care about. Example, we might see
    // something like:
    // "{urn:healthit-gov:qdm:v5_0_draft}PatientCharacteristicEthnicity"
    // Where we only care about: "PatientCharacteristicEthnicity".
    profileStripped = profile.replace(/ *\{[^)]*\} */g, '');

    // Check and handle negation status
    if (/Positive/.test(profileStripped)) {
      profileStripped = profileStripped.replace(/Positive/, '');
      // Since the data criteria is 'Positive', it is not negated.
      QDMPatientSchema.dataElementCache[profile] = this.getByProfile(profileStripped, false);
      return QDMPatientSchema.dataElementCache[profile];
    } else if (/Negative/.test(profileStripped)) {
      profileStripped = profileStripped.replace(/Negative/, '');
      // Since the data criteria is 'Negative', it is negated.
      QDMPatientSchema.dataElementCache[profile] = this.getByProfile(profileStripped, true);
      return QDMPatientSchema.dataElementCache[profile];
    }
    // No negation status, proceed normally
    QDMPatientSchema.dataElementCache[profile] = this.getByProfile(profileStripped);
    return QDMPatientSchema.dataElementCache[profile];
  }
  return [];
};

QDMPatientSchema.methods.adverse_events = function adverse_events() {
  return this.getDataElements({ qdmCategory: 'adverse_event' });
};

QDMPatientSchema.methods.allergies = function allergies() {
  return this.getDataElements({ qdmCategory: 'allergy' });
};

QDMPatientSchema.methods.assessments = function assessments() {
  return this.getDataElements({ qdmCategory: 'assessment' });
};

QDMPatientSchema.methods.care_experiences = function care_experiences() {
  return this.getDataElements({ qdmCategory: 'care_experience' });
};

QDMPatientSchema.methods.care_goals = function care_goals() {
  return this.getDataElements({ qdmCategory: 'care_goal' });
};

QDMPatientSchema.methods.communications = function communications() {
  return this.getDataElements({ qdmCategory: 'communication' });
};

QDMPatientSchema.methods.conditions = function conditions() {
  return this.getDataElements({ qdmCategory: 'condition' });
};

QDMPatientSchema.methods.devices = function devices() {
  return this.getDataElements({ qdmCategory: 'device' });
};

QDMPatientSchema.methods.diagnostic_studies = function diagnostic_studies() {
  return this.getDataElements({ qdmCategory: 'diagnostic_study' });
};

QDMPatientSchema.methods.encounters = function encounters() {
  return this.getDataElements({ qdmCategory: 'encounter' });
};

QDMPatientSchema.methods.family_history = function family_history() {
  return this.getDataElements({ qdmCategory: 'family_history' });
};

QDMPatientSchema.methods.functional_statuses = function functional_statuses() {
  return this.getDataElements({ qdmCategory: 'functional_status' });
};

QDMPatientSchema.methods.immunizations = function immunizations() {
  return this.getDataElements({ qdmCategory: 'immunization' });
};

QDMPatientSchema.methods.interventions = function interventions() {
  return this.getDataElements({ qdmCategory: 'intervention' });
};

QDMPatientSchema.methods.laboratory_tests = function laboratory_tests() {
  return this.getDataElements({ qdmCategory: 'laboratory_test' });
};

QDMPatientSchema.methods.medical_equipment = function medical_equipment() {
  return this.getDataElements({ qdmCategory: 'medical_equipment' });
};

QDMPatientSchema.methods.medications = function medications() {
  return this.getDataElements({ qdmCategory: 'medication' });
};

QDMPatientSchema.methods.patient_characteristics = function patient_characteristics() {
  return this.getDataElements({ qdmCategory: 'patient_characteristic' });
};

QDMPatientSchema.methods.physical_exams = function physical_exams() {
  return this.getDataElements({ qdmCategory: 'physical_exam' });
};

QDMPatientSchema.methods.preferences = function preferences() {
  return this.getDataElements({ qdmCategory: 'preference' });
};

QDMPatientSchema.methods.procedures = function procedures() {
  return this.getDataElements({ qdmCategory: 'procedure' });
};

QDMPatientSchema.methods.results = function results() {
  return this.getDataElements({ qdmCategory: 'result' });
};

QDMPatientSchema.methods.risk_category_assessments = function risk_category_assessments() {
  return this.getDataElements({ qdmCategory: 'risk_category_assessment' });
};

QDMPatientSchema.methods.social_history = function social_history() {
  return this.getDataElements({ qdmCategory: 'social_history' });
};

QDMPatientSchema.methods.substances = function substances() {
  return this.getDataElements({ qdmCategory: 'substance' });
};

QDMPatientSchema.methods.symptoms = function symptoms() {
  return this.getDataElements({ qdmCategory: 'symptom' });
};

QDMPatientSchema.methods.system_characteristics = function system_characteristics() {
  return this.getDataElements({ qdmCategory: 'system_characteristic' });
};

QDMPatientSchema.methods.transfers = function transfers() {
  return this.getDataElements({ qdmCategory: 'transfer' });
};

QDMPatientSchema.methods.vital_signs = function vital_signs() {
  return this.getDataElements({ qdmCategory: 'vital_sign' });
};

QDMPatientSchema.clearDataElementCache = function clearDataElementCache() {
  QDMPatientSchema.dataElementCachePatientId = null;
  QDMPatientSchema.dataElementCache = null;
};

module.exports.QDMPatientSchema = QDMPatientSchema;
class QDMPatient extends mongoose.Document {
  constructor(object) {
    super(object, QDMPatientSchema);
    this.initializeDataElements();
  }
}
module.exports.QDMPatient = QDMPatient;
