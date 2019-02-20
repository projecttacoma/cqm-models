module QDM
  # app/models/qdm/base64_binary.rb
  class Base64Binary < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
