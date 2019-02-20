module QDM
  # app/models/qdm/orientation_type.rb
  class OrientationType < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
