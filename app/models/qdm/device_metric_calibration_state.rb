module QDM
  # app/models/qdm/device_metric_calibration_state.rb
  class DeviceMetricCalibrationState < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
