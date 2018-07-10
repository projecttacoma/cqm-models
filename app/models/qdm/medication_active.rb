module QDM
  # app/models/qdm/medication_active.rb
  class MedicationActive < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :relevantPeriod, type: QDM::Interval
    field :dosage, type: QDM::Quantity
    field :supply, type: QDM::Quantity
    field :frequency
    field :route
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.3.44'
    field :category, type: String, default: 'medication'
    field :qdmStatus, type: String, default: 'active'
    field :qdmVersion, type: String, default: '5.3'
  end
end
