module QDM
  # app/models/qdm/intervention_order.rb
  class InterventionOrder < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :authorDatetime, type: DateTime
    field :reason, type: QDM::Code
    field :negationRationale, type: QDM::Code
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.3.35'
    field :qdmCategory, type: String, default: 'intervention'
    field :qdmStatus, type: String, default: 'order'
    field :qdmVersion, type: String, default: '5.4'
  end
end
