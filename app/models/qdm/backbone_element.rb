module QDM
  # app/models/qdm/backbone_element.rb
  class BackboneElement < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :modifierExtension
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
