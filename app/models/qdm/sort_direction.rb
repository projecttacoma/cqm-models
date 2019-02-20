module QDM
  # app/models/qdm/sort_direction.rb
  class SortDirection < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
