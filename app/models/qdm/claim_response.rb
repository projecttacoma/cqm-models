module QDM
  # app/models/qdm/claim_response.rb
  class ClaimResponse < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier
    field :status
    field :type
    field :subType
    field :use
    field :patient
    field :created
    field :insurer
    field :requestor
    field :request
    field :outcome
    field :disposition
    field :preAuthRef
    field :preAuthPeriod
    field :payeeType
    field :item
    field :addItem
    field :adjudication
    field :total
    field :payment
    field :fundsReserve
    field :formQDM::Code
    field :form
    field :processNote
    field :communicationRequest
    field :insurance
    field :error
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
