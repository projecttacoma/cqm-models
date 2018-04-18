module QDM
  # app/models/qdm/id.rb
  class Id < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :namingSystem, type: String
    field :value, type: String
    field :qdmVersion, type: String, default: '5.3'
  end
end
