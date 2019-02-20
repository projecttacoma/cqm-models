module QDM
  # app/models/qdm/device_metric_color.rb
  class DeviceMetricColor < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
