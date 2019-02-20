module QDM
  # app/models/qdm/observation.rb
  class Observation < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier
    field :basedOn
    field :partOf
    field :status
    field :category
    field :code
    field :subject
    field :focus
    field :encounter
    field :effective
    field :issued
    field :performer
    field :value
    field :dataAbsentReason
    field :interpretation
    field :note
    field :bodySite
    field :method
    field :specimen
    field :device
    field :referenceRange
    field :hasMember
    field :derivedFrom
    field :component
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
