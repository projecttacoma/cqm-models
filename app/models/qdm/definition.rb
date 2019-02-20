module QDM
  # app/models/qdm/definition.rb
  class Definition < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :grouping
    field :resource
    field :page
    field :parameter
    field :template
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
