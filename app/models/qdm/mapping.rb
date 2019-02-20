module QDM
  # app/models/qdm/mapping.rb
  class Mapping < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identity
    field :language
    field :map
    field :comment
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
