module QDM
  # app/models/qdm/observation_range_category.rb
  class ObservationRangeCategory < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
