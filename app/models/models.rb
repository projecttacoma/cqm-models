# Base QDM module (generated from lib/generate_models.rb) for QDM 5.3
module QDM
end
require 'mongoid'

# Generated models that are dependencies for base types
require_relative 'qdm/id'

# base types
require_relative 'qdm/basetypes/code'
require_relative 'qdm/basetypes/data_element'
require_relative 'qdm/basetypes/interval'
require_relative 'qdm/basetypes/quantity'
require_relative 'qdm/basetypes/ratio'

# Tacoma-specific models
require_relative 'qdm/tacoma/measure'
require_relative 'qdm/tacoma/measure_package'
require_relative 'qdm/tacoma/valueset'
require_relative 'qdm/tacoma/concept'
require_relative 'qdm/tacoma/individual_result'
require_relative 'qdm/tacoma/cql_statement_dependency'
require_relative 'qdm/tacoma/cql_library'

# Generated models
require_relative 'qdm/patient'
require_relative 'qdm/physical_exam_order'
require_relative 'qdm/participation'
require_relative 'qdm/patient_characteristic_sex'
require_relative 'qdm/care_goal'
require_relative 'qdm/patient_characteristic'
require_relative 'qdm/patient_characteristic_ethnicity'
require_relative 'qdm/patient_characteristic_race'
require_relative 'qdm/laboratory_test_performed'
require_relative 'qdm/symptom'
require_relative 'qdm/medication_administered'
require_relative 'qdm/procedure_recommended'
require_relative 'qdm/encounter_performed'
require_relative 'qdm/diagnosis'
require_relative 'qdm/communication_performed'
require_relative 'qdm/assessment_performed'
require_relative 'qdm/patient_characteristic_clinical_trial_participant'
require_relative 'qdm/device_order'
require_relative 'qdm/diagnostic_study_performed'
require_relative 'qdm/intervention_order'
require_relative 'qdm/family_history'
require_relative 'qdm/component'
require_relative 'qdm/result_component'
require_relative 'qdm/facility_location'
require_relative 'qdm/medication_active'
require_relative 'qdm/laboratory_test_order'
require_relative 'qdm/diagnostic_study_order'
require_relative 'qdm/substance_order'
require_relative 'qdm/patient_characteristic_payer'
require_relative 'qdm/patient_characteristic_expired'
require_relative 'qdm/assessment_order'
require_relative 'qdm/assessment_recommended'
require_relative 'qdm/immunization_administered'
require_relative 'qdm/substance_administered'
require_relative 'qdm/encounter_order'
require_relative 'qdm/encounter_recommended'
require_relative 'qdm/procedure_performed'
require_relative 'qdm/allergy_intolerance'
require_relative 'qdm/provider_characteristic'
require_relative 'qdm/physical_exam_recommended'
require_relative 'qdm/patient_characteristic_birthdate'
require_relative 'qdm/adverse_event'
require_relative 'qdm/device_recommended'
require_relative 'qdm/device_applied'
require_relative 'qdm/medication_discharge'
require_relative 'qdm/intervention_performed'
require_relative 'qdm/laboratory_test_recommended'
require_relative 'qdm/medication_dispensed'
require_relative 'qdm/diagnostic_study_recommended'
require_relative 'qdm/immunization_order'
require_relative 'qdm/patient_care_experience'
require_relative 'qdm/provider_care_experience'
require_relative 'qdm/procedure_order'
require_relative 'qdm/medication_order'
require_relative 'qdm/substance_recommended'
require_relative 'qdm/intervention_recommended'
require_relative 'qdm/physical_exam_performed'
