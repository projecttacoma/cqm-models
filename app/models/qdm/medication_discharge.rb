module QDM
  # app/models/qdm/medication_discharge.rb
  class MedicationDischarge < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :author_datetime, type: DateTime
    field :refills, type: Integer
    field :dosage, type: QDM::Quantity
    field :supply, type: QDM::Quantity
    field :frequency, type: QDM::Code
    field :route, type: QDM::Code
    field :negation_rationale, type: QDM::Code
    field :hqmf_oid, type: String, default: '2.16.840.1.113883.10.20.28.3.48'
    field :category, type: String, default: 'medication'
    field :status, type: String, default: 'discharge'
    field :qdm_version, type: String, default: '5.3'
  end
end
