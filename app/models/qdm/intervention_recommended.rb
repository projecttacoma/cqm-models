module QDM
  # app/models/qdm/intervention_recommended.rb
  class InterventionRecommended < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :authorDatetime, type: DateTime
    field :reason, type: QDM::Code
    field :negationRationale, type: QDM::Code
    embeds_many :requester, class_name: 'QDM::Entity'
    field :qdmTitle, type: String, default: 'Intervention, Recommended'
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.4.37'
    field :qdmCategory, type: String, default: 'intervention'
    field :qdmStatus, type: String, default: 'recommended'
    field :qdmVersion, type: String, default: '5.6'
  end
end
