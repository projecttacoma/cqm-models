module QDM
  # app/models/qdm/property1.rb
  class Property1 < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :code
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
