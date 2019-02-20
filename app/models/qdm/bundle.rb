module QDM
  # app/models/qdm/bundle.rb
  class Bundle < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier
    field :type
    field :timestamp
    field :total
    field :link
    field :entry
    field :signature
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
