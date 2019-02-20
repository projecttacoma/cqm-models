module QDM
  # app/models/qdm/list.rb
  class List < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier
    field :status
    field :mode
    field :title
    field :code
    field :subject
    field :encounter
    field :date
    field :source
    field :orderedBy
    field :note
    field :entry
    field :emptyReason
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
