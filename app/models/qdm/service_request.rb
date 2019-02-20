module QDM
  # app/models/qdm/service_request.rb
  class ServiceRequest < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier
    field :instantiatesCanonical
    field :instantiatesUri
    field :basedOn
    field :replaces
    field :requisition
    field :status
    field :intent
    field :category
    field :priority
    field :doNotPerform
    field :code
    field :orderDetail
    field :quantity
    field :subject
    field :encounter
    field :occurrence
    field :asNeeded
    field :authoredOn
    field :requester
    field :performerType
    field :performer
    field :locationQDM::Code
    field :locationReference
    field :reasonQDM::Code
    field :reasonReference
    field :insurance
    field :supportingInfo
    field :specimen
    field :bodySite
    field :note
    field :patientInstruction
    field :relevantHistory
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
