module QDM
  # app/models/qdm/patient.rb
  class Patient < DataElement
    include Mongoid::Document
    field :birth_datetime, type: DateTime
    field :qdm_version, type: String, default: '5.3'
    field :given_names, type: Array
    field :family_name, type: String
    field :bundle_id, type: String

    # These are the "data criteria", or QDM datatype elements that exist on a
    # patient.
    embeds_many :data_elements

    # Returns an array of elements that exist on this patient, that
    # match the given HQMF data criteria OID.
    def get_by_hqmf_oid(hqmf_oid)
      data_elements.where(hqmf_oid: hqmf_oid) || []
    end

    # Returns an array of elements that exist on this patient, that
    # match the given QRDA data criteria OID.
    def get_by_qrda_oid(qrda_oid)
      data_elements.where(qrda_oid: qrda_oid) || []
    end

    # Returns an array of elements that exist on this patient. Optionally
    # takes a category and/or, which returns all elements of that QDM
    # category. Example: patient.get_data_elements('encounters')
    # will return all Encounter QDM data types active on the patient.
    def get_data_elements(category = nil, status = nil)
      if category && status
        data_elements.where(category: category, status: status) || []
      elsif category
        data_elements.where(category: category) || []
      else
        data_elements || []
      end
    end

    # Helper method; returns adverse_event data element types on this patient.
    def adverse_events
      get_data_elements('adverse_event')
    end

    # Helper method; returns allergy data element types on this patient.
    def allergies
      get_data_elements('allergy')
    end

    # Helper method; returns assessment data element types on this patient.
    def assessments
      get_data_elements('assessment')
    end

    # Helper method; returns care_experience data element types on this patient.
    def care_experiences
      get_data_elements('care_experience')
    end

    # Helper method; returns care_goal data element types on this patient.
    def care_goals
      get_data_elements('care_goal')
    end

    # Helper method; returns communication data element types on this patient.
    def communications
      get_data_elements('communication')
    end

    # Helper method; returns condition data element types on this patient.
    def conditions
      get_data_elements('condition')
    end

    # Helper method; returns device data element types on this patient.
    def devices
      get_data_elements('device')
    end

    # Helper method; returns diagnostic_study data element types on this patient.
    def diagnostic_studies
      get_data_elements('diagnostic_study')
    end

    # Helper method; returns encounter data element types on this patient.
    def encounters
      get_data_elements('encounter')
    end

    # Helper method; returns family_history data element types on this patient.
    def family_history
      get_data_elements('family_history')
    end

    # Helper method; returns functional_status data element types on this patient.
    def functional_statuses
      get_data_elements('functional_status')
    end

    # Helper method; returns immunization data element types on this patient.
    def immunizations
      get_data_elements('immunization')
    end

    # Helper method; returns intervention data element types on this patient.
    def interventions
      get_data_elements('intervention')
    end

    # Helper method; returns laboratory_test data element types on this patient.
    def laboratory_tests
      get_data_elements('laboratory_test')
    end

    # Helper method; returns medical_equipment data element types on this patient.
    def medical_equipment
      get_data_elements('medical_equipment')
    end

    # Helper method; returns medication data element types on this patient.
    def medications
      get_data_elements('medication')
    end

    # Helper method; returns physical_exam data element types on this patient.
    def physical_exams
      get_data_elements('physical_exam')
    end

    # Helper method; returns preference data element types on this patient.
    def preferences
      get_data_elements('preference')
    end

    # Helper method; returns provider_characteristic data element types on this patient.
    def provider_characteristics
      get_data_elements('provider_characteristic')
    end

    # Helper method; returns procedure data element types on this patient.
    def procedures
      get_data_elements('procedure')
    end

    # Helper method; returns result data element types on this patient.
    def results
      get_data_elements('result')
    end

    # Helper method; returns risk_category_assessment data element types on this patient.
    def risk_category_assessments
      get_data_elements('risk_category_assessment')
    end

    # Helper method; returns social_history data element types on this patient.
    def social_history
      get_data_elements('social_history')
    end

    # Helper method; returns substance data element types on this patient.
    def substances
      get_data_elements('substance')
    end

    # Helper method; returns symptom data element types on this patient.
    def symptoms
      get_data_elements('symptom')
    end

    # Helper method; returns system_characteristic data element types on this patient.
    def system_characteristics
      get_data_elements('system_characteristic')
    end

    # Helper method; returns transfer data element types on this patient.
    def transfers
      get_data_elements('transfer')
    end

    # Helper method; returns vital_sign data element types on this patient.
    def vital_signs
      get_data_elements('vital_sign')
    end
  end
end
