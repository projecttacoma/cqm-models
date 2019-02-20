module QDM
  # app/models/qdm/dose_and_rate.rb
  class DoseAndRate < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :type
    field :dose
    field :rate
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
