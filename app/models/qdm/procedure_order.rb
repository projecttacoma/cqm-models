module QDM
  # app/models/qdm/procedure_order.rb
  class ProcedureOrder < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :authorDatetime, type: DateTime
    field :reason, type: QDM::Code
    field :method, type: QDM::Code
    field :anatomicalApproachSite, type: QDM::Code
    field :anatomicalLocationSite, type: QDM::Code
    field :ordinality, type: QDM::Code
    field :negationRationale, type: QDM::Code
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.3.66'
    field :category, type: String, default: 'procedure'
    field :qdmStatus, type: String, default: 'order'
    field :qdmVersion, type: String, default: '5.3'
  end
end
