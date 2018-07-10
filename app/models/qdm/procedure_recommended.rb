module QDM
  # app/models/qdm/procedure_recommended.rb
  class ProcedureRecommended < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :authorDatetime, type: DateTime
    field :reason, type: Mixed
    field :method, type: Mixed
    field :anatomicalApproachSite, type: Mixed
    field :anatomicalLocationSite, type: Mixed
    field :ordinality, type: Mixed
    field :negationRationale, type: Mixed
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.3.68'
    field :category, type: String, default: 'procedure'
    field :qdmStatus, type: String, default: 'recommended'
    field :qdmVersion, type: String, default: '5.3'
  end
end
