module QDM
  # app/models/qdm/precision_estimate.rb
  class PrecisionEstimate < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :type
    field :level
    field :from
    field :to
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
