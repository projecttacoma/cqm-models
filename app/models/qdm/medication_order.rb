module QDM
  # app/models/qdm/medication_order.rb
  class MedicationOrder < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :activeDatetime, type: DateTime
    field :relevantPeriod, type: QDM::Interval
    field :authorDatetime, type: DateTime
    field :refills, type: Integer
    field :dosage, type: QDM::Quantity
    field :supply, type: QDM::Quantity
    field :frequency
    field :route
    field :method
    field :reason
    field :negationRationale
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.3.51'
    field :category, type: String, default: 'medication'
    field :qdmStatus, type: String, default: 'order'
    field :qdmVersion, type: String, default: '5.3'
  end
end
