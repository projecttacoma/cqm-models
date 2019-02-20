module QDM
  # app/models/qdm/relates_to.rb
  class RelatesTo < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :code
    field :target
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
