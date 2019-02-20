module QDM
  # app/models/qdm/research_element_type.rb
  class ResearchElementType < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
