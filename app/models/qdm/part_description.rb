module QDM
  # app/models/qdm/part_description.rb
  class PartDescription < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :part
    field :partLocation
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
