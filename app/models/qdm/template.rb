module QDM
  # app/models/qdm/template.rb
  class Template < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :code
    field :source
    field :scope
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
