module QDM
  # app/models/qdm/investigation.rb
  class Investigation < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :code
    field :item
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
