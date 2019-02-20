module QDM
  # app/models/qdm/x_path_usage_type.rb
  class XPathUsageType < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
