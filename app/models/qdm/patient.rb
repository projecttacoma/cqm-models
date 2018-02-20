class QDM::Patient < QDM::Datatype
  include Mongoid::Document
  field :birth_datetime, type: DateTime
  field :qdm_version, type: String, default: '5.3'
  field :ethnicity, type: QDM::Code
  field :race, type: QDM::Code
  field :sex, type: QDM::Code
  field :given_names, type: Array
  field :family_name, type: QDM::Code
  field :bundle_id, type: String

  # These are the "data criteria", or QDM datatype elements that exist on a
  # patient.
  embeds_many :history_elements

  # Returns an array of history elements that exist on this patient, that
  # match the given HQMF data criteria OID.
  def get_by_hqmf_oid(hqmf_oid)
    history_elements.where(hqmf_oid: hqmf_oid) || []
  end

  # Returns an array of history elements that exist on this patient, that
  # match the given QRDA data criteria OID.
  def get_by_qrda_oid(qrda_oid)
    history_elements.where(qrda_oid: qrda_oid) || []
  end

  # Returns an array of history elements that exist on this patient. Optionally
  # takes a category and/or, which returns all history elements of that QDM
  # category. Example: patient.get_history_elements(category = 'encounters')
  # will return all Encounter QDM data types active on the patient.
  def get_history_elements(category = nil, status = nil)
    if category && status
      history_elements.where(category: category, status: status) || []
    elsif category
      history_elements.where(category: category) || []
    else
      history_elements || []
    end
  end

  def adverse_events
    get_history_elements('adverse_event')
  end

  def allergies
    get_history_elements('allergy')
  end

  def assessments
    get_history_elements('assessment')
  end

  def care_experiences
    get_history_elements('care_experience')
  end

  def care_goals
    get_history_elements('care_goal')
  end

  def communications
    get_history_elements('communication')
  end

  def conditions
    get_history_elements('condition')
  end

  def devices
    get_history_elements('device')
  end

  def diagnostic_studies
    get_history_elements('diagnostic_study')
  end

  def encounters
    get_history_elements('encounter')
  end

  def family_history
    get_history_elements('family_history')
  end

  def functional_statuses
    get_history_elements('functional_status')
  end

  def immunizations
    get_history_elements('immunization')
  end

  def interventions
    get_history_elements('intervention')
  end

  def laboratory_tests
    get_history_elements('laboratory_test')
  end

  def medical_equipment
    get_history_elements('medical_equipment')
  end

  def medications
    get_history_elements('medication')
  end

  def physical_exams
    get_history_elements('physical_exam')
  end

  def preferences
    get_history_elements('preference')
  end

  def provider_characteristics
    get_history_elements('provider_characteristic')
  end

  def procedures
    get_history_elements('procedure')
  end

  def results
    get_history_elements('result')
  end

  def risk_category_assessments
    get_history_elements('risk_category_assessment')
  end

  def social_history
    get_history_elements('social_history')
  end

  def substances
    get_history_elements('substance')
  end

  def symptoms
    get_history_elements('symptom')
  end

  def system_characteristics
    get_history_elements('system_characteristic')
  end

  def transfers
    get_history_elements('transfer')
  end

  def vital_signs
    get_history_elements('vital_sign')
  end
end

