module QDM
  # app/models/qdm/task.rb
  class Task < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier
    field :instantiatesCanonical
    field :instantiatesUri
    field :basedOn
    field :groupIdentifier
    field :partOf
    field :status
    field :statusReason
    field :businessStatus
    field :intent
    field :priority
    field :code
    field :description
    field :focus
    field :for
    field :encounter
    field :executionPeriod
    field :authoredOn
    field :lastModified
    field :requester
    field :performerType
    field :owner
    field :location
    field :reasonQDM::Code
    field :reasonReference
    field :insurance
    field :note
    field :relevantHistory
    field :restriction
    field :input
    field :output
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
