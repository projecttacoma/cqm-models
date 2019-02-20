module QDM
  # app/models/qdm/representation.rb
  class Representation < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :type
    field :representation
    field :attachment
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
