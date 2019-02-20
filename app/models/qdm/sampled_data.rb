module QDM
  # app/models/qdm/sampled_data.rb
  class SampledData < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :origin
    field :period
    field :factor
    field :lowerLimit
    field :upperLimit
    field :dimensions
    field :data
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
