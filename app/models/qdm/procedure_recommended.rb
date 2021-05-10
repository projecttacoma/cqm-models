module QDM
  # app/models/qdm/procedure_recommended.rb
  class ProcedureRecommended < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :authorDatetime, type: DateTime
    field :reason, type: QDM::Code
    field :anatomicalLocationSite, type: QDM::Code
    field :rank, type: Integer
    embeds_many :requester, class_name: 'QDM::Entity'
    field :negationRationale, type: QDM::Code
    field :qdmTitle, type: String, default: 'Procedure, Recommended'
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.4.68'
    field :qdmCategory, type: String, default: 'procedure'
    field :qdmStatus, type: String, default: 'recommended'
    field :qdmVersion, type: String, default: '5.6'
  end
end
