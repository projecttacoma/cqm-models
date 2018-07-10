module QDM
  # app/models/qdm/procedure_order.rb
  class ProcedureOrder < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :authorDatetime, type: DateTime
    field :reason
    field :method
    field :anatomicalApproachSite
    field :anatomicalLocationSite
    field :ordinality
    field :negationRationale
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.3.66'
    field :category, type: String, default: 'procedure'
    field :qdmStatus, type: String, default: 'order'
    field :qdmVersion, type: String, default: '5.3'
  end
end
