module QDM
  # app/models/qdm/immunization_order.rb
  class ImmunizationOrder < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :activeDatetime, type: DateTime
    field :authorDatetime, type: DateTime
    field :dosage, type: QDM::Quantity
    field :supply, type: QDM::Quantity
    field :reason, type: QDM::Code
    field :route, type: QDM::Code
    field :negationRationale, type: QDM::Code
    embeds_many :requester, class_name: 'QDM::Entity'
    field :qdmTitle, type: String, default: 'Immunization, Order'
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.4.113'
    field :qdmCategory, type: String, default: 'immunization'
    field :qdmStatus, type: String, default: 'order'
    field :qdmVersion, type: String, default: '5.6'
  end
end
