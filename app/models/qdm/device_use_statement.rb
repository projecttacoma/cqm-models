module QDM
  # app/models/qdm/device_use_statement.rb
  class DeviceUseStatement < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier
    field :basedOn
    field :status
    field :subject
    field :derivedFrom
    field :timing
    field :recordedOn
    field :source
    field :device
    field :reasonQDM::Code
    field :reasonReference
    field :bodySite
    field :note
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
