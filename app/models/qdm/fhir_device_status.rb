module QDM
  # app/models/qdm/fhir_device_status.rb
  class FhirDeviceStatus < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
