module QDM
  # app/models/qdm/parameters.rb
  class Parameters < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :parameter
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
