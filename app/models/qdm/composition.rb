module QDM
  # app/models/qdm/composition.rb
  class Composition < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier
    field :status
    field :type
    field :category
    field :subject
    field :encounter
    field :date
    field :author
    field :title
    field :confidentiality
    field :attester
    field :custodian
    field :relatesTo
    field :event
    field :section
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
