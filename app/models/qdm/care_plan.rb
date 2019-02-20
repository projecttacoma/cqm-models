module QDM
  # app/models/qdm/care_plan.rb
  class CarePlan < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier
    field :instantiatesCanonical
    field :instantiatesUri
    field :basedOn
    field :replaces
    field :partOf
    field :status
    field :intent
    field :category
    field :title
    field :description
    field :subject
    field :encounter
    field :period
    field :created
    field :author
    field :contributor
    field :careTeam
    field :addresses
    field :supportingInfo
    field :goal
    field :activity
    field :note
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
