module QDM
  # app/models/qdm/term.rb
  class Term < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier
    field :issued
    field :applies
    field :topic
    field :type
    field :subType
    field :text
    field :securityLabel
    field :offer
    field :asset
    field :action
    field :group
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
