module QDM
  # app/models/qdm/activity.rb
  class Activity < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :outcomeQDM::CodeableConcept
    field :outcomeReference
    field :progress
    field :reference
    field :detail
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
