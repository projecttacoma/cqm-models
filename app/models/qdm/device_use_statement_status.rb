module QDM
  # app/models/qdm/device_use_statement_status.rb
  class DeviceUseStatementStatus < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
