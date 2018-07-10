module QDM
  # app/models/qdm/substance_administered.rb
  class SubstanceAdministered < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :authorDatetime, type: DateTime
    field :relevantPeriod, type: QDM::Interval
    field :dosage, type: QDM::Quantity
    field :supply, type: QDM::Quantity
    field :frequency, type: Mixed
    field :route, type: Mixed
    field :negationRationale, type: Mixed
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.3.73'
    field :category, type: String, default: 'substance'
    field :qdmStatus, type: String, default: 'administered'
    field :qdmVersion, type: String, default: '5.3'
  end
end
