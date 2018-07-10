module QDM
  # app/models/qdm/substance_recommended.rb
  class SubstanceRecommended < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :authorDatetime, type: DateTime
    field :reason, type: Mixed
    field :dosage, type: QDM::Quantity
    field :supply, type: QDM::Quantity
    field :frequency, type: Mixed
    field :method, type: Mixed
    field :refills, type: Integer
    field :route, type: Mixed
    field :negationRationale, type: Mixed
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.3.78'
    field :category, type: String, default: 'substance'
    field :qdmStatus, type: String, default: 'recommended'
    field :qdmVersion, type: String, default: '5.3'
  end
end
