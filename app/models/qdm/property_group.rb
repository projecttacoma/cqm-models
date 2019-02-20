module QDM
  # app/models/qdm/property_group.rb
  class PropertyGroup < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :applicability
    field :priceComponent
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
