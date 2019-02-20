module QDM
  # app/models/qdm/link.rb
  class Link < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :other
    field :type
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
