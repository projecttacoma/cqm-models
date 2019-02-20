module QDM
  # app/models/qdm/grouping.rb
  class Grouping < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :name
    field :description
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
