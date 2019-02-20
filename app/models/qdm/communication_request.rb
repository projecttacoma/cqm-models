module QDM
  # app/models/qdm/communication_request.rb
  class CommunicationRequest < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier
    field :basedOn
    field :replaces
    field :groupIdentifier
    field :status
    field :statusReason
    field :category
    field :priority
    field :doNotPerform
    field :medium
    field :subject
    field :about
    field :encounter
    field :payload
    field :occurrence
    field :authoredOn
    field :requester
    field :recipient
    field :sender
    field :reasonQDM::Code
    field :reasonReference
    field :note
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
