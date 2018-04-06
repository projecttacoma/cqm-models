module QDM
  # app/models/qdm/intervention_recommended.rb
  class InterventionRecommended < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :author_datetime, type: DateTime
    field :reason, type: QDM::Code
    field :negation_rationale, type: QDM::Code
    field :hqmf_oid, type: String, default: '2.16.840.1.113883.10.20.28.3.37'
    field :category, type: String, default: 'intervention'
    field :qdm_status, type: String, default: 'recommended'
    field :qdm_version, type: String, default: '5.3'
  end
end
