module QDM
  # app/models/qdm/device_metric.rb
  class DeviceMetric < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier
    field :type
    field :unit
    field :source
    field :parent
    field :operationalStatus
    field :color
    field :category
    field :measurementPeriod
    field :calibration
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
