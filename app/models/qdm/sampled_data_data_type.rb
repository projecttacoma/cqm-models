module QDM
  # app/models/qdm/sampled_data_data_type.rb
  class SampledDataDataType < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
