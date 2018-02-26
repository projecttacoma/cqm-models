class QDM::Patient
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
  # category. Example: patient.get_data_elements(category = 'encounters')
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

  # Return the Mongo id for this patient.
  def id
    self._id
  end

  def adverse_events
    get_data_elements('adverse_event')
  end

  def allergies
    get_data_elements('allergy')
  end

  def assessments
    get_data_elements('assessment')
  end

  def care_experiences
    get_data_elements('care_experience')
  end

  def care_goals
    get_data_elements('care_goal')
  end

  def communications
    get_data_elements('communication')
  end

  def conditions
    get_data_elements('condition')
  end

  def devices
    get_data_elements('device')
  end

  def diagnostic_studies
    get_data_elements('diagnostic_study')
  end

  def encounters
    get_data_elements('encounter')
  end

  def family_history
    get_data_elements('family_history')
  end

  def functional_statuses
    get_data_elements('functional_status')
  end

  def immunizations
    get_data_elements('immunization')
  end

  def interventions
    get_data_elements('intervention')
  end

  def laboratory_tests
    get_data_elements('laboratory_test')
  end

  def medical_equipment
    get_data_elements('medical_equipment')
  end

  def medications
    get_data_elements('medication')
  end

  def physical_exams
    get_data_elements('physical_exam')
  end

  def preferences
    get_data_elements('preference')
  end

  def provider_characteristics
    get_data_elements('provider_characteristic')
  end

  def procedures
    get_data_elements('procedure')
  end

  def results
    get_data_elements('result')
  end

  def risk_category_assessments
    get_data_elements('risk_category_assessment')
  end

  def social_history
    get_data_elements('social_history')
  end

  def substances
    get_data_elements('substance')
  end

  def symptoms
    get_data_elements('symptom')
  end

  def system_characteristics
    get_data_elements('system_characteristic')
  end

  def transfers
    get_data_elements('transfer')
  end

  def vital_signs
    get_data_elements('vital_sign')
  end
end

