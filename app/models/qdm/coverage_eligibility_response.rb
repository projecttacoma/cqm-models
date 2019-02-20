module QDM
  # app/models/qdm/coverage_eligibility_response.rb
  class CoverageEligibilityResponse < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier
    field :status
    field :purpose
    field :patient
    field :serviced
    field :created
    field :requestor
    field :request
    field :outcome
    field :disposition
    field :insurer
    field :insurance
    field :preAuthRef
    field :form
    field :error
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
