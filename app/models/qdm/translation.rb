module QDM
  # app/models/qdm/translation.rb
  class Translation < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :needsMap
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
