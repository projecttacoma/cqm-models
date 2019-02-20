module QDM
  # app/models/qdm/sort.rb
  class Sort < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :path
    field :direction
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
