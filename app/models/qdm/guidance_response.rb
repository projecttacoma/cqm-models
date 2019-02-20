module QDM
  # app/models/qdm/guidance_response.rb
  class GuidanceResponse < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :requestIdentifier
    field :identifier
    field :module
    field :status
    field :subject
    field :encounter
    field :occurrenceDateTime
    field :performer
    field :reasonQDM::Code
    field :reasonReference
    field :note
    field :evaluationMessage
    field :outputParameters
    field :result
    field :dataRequirement
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
