module QDM
  # app/models/qdm/device_metric_category.rb
  class DeviceMetricCategory < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
