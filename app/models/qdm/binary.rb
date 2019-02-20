module QDM
  # app/models/qdm/binary.rb
  class Binary < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :contentType
    field :securityContext
    field :data
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
