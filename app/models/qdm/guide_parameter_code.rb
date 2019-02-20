module QDM
  # app/models/qdm/guide_parameter_code.rb
  class GuideParameterCode < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
