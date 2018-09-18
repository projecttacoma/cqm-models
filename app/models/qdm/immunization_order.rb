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
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.3.113'
    field :qdmVersion, type: String, default: '5.4'
  end
end
