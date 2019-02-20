module QDM
  # app/models/qdm/signature.rb
  class Signature < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :type
    field :when
    field :who
    field :onBehalfOf
    field :targetFormat
    field :sigFormat
    field :data
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
