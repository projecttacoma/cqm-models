module QDM
  # app/models/qdm/device_request.rb
  class DeviceRequest < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier
    field :instantiatesCanonical
    field :instantiatesUri
    field :basedOn
    field :priorRequest
    field :groupIdentifier
    field :status
    field :intent
    field :priority
    field :code
    field :parameter
    field :subject
    field :encounter
    field :occurrence
    field :authoredOn
    field :requester
    field :performerType
    field :performer
    field :reasonQDM::Code
    field :reasonReference
    field :insurance
    field :supportingInfo
    field :note
    field :relevantHistory
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
