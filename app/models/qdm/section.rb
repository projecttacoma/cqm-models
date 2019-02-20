module QDM
  # app/models/qdm/section.rb
  class Section < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :title
    field :code
    field :author
    field :focus
    field :text
    field :mode
    field :orderedBy
    field :entry
    field :emptyReason
    field :section
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
