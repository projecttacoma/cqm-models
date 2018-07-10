module QDM
  # app/models/qdm/substance_order.rb
  class SubstanceOrder < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :authorDatetime, type: DateTime
    field :reason
    field :dosage, type: QDM::Quantity
    field :supply, type: QDM::Quantity
    field :frequency
    field :method
    field :refills, type: Integer
    field :route
    field :negationRationale
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.3.77'
    field :category, type: String, default: 'substance'
    field :qdmStatus, type: String, default: 'order'
    field :qdmVersion, type: String, default: '5.3'
  end
end
