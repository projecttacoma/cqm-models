module QDM
  # app/models/qdm/property_type.rb
  class PropertyType < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
