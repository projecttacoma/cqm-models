module QDM
  # app/models/qdm/medication_order.rb
  class MedicationOrder < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :active_datetime, type: DateTime
    field :relevant_period, type: QDM::Interval
    field :author_datetime, type: DateTime
    field :refills, type: Integer
    field :dosage, type: QDM::Quantity
    field :supply, type: QDM::Quantity
    field :frequency, type: QDM::Code
    field :route, type: QDM::Code
    field :method, type: QDM::Code
    field :reason, type: QDM::Code
    field :negation_rationale, type: QDM::Code
    field :hqmf_oid, type: String, default: '2.16.840.1.113883.10.20.28.3.51'
    field :category, type: String, default: 'medication'
    field :qdm_status, type: String, default: 'order'
    field :qdm_version, type: String, default: '5.3'
  end
end
