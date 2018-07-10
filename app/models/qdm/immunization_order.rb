module QDM
  # app/models/qdm/immunization_order.rb
  class ImmunizationOrder < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :activeDatetime, type: DateTime
    field :authorDatetime, type: DateTime
    field :dosage, type: QDM::Quantity
    field :supply, type: QDM::Quantity
    field :reason, type: Mixed
    field :route, type: Mixed
    field :negationRationale, type: Mixed
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.3.113'
    field :category, type: String, default: 'immunization'
    field :qdmStatus, type: String, default: 'order'
    field :qdmVersion, type: String, default: '5.3'
  end
end
