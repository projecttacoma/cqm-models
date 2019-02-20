module QDM
  # app/models/qdm/quality_type.rb
  class QualityType < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
