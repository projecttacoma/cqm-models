module QDM
  # app/models/qdm/flag.rb
  class Flag < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier
    field :status
    field :category
    field :code
    field :subject
    field :period
    field :encounter
    field :author
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
