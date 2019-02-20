module QDM
  # app/models/qdm/coverage_eligibility_request.rb
  class CoverageEligibilityRequest < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier
    field :status
    field :priority
    field :purpose
    field :patient
    field :serviced
    field :created
    field :enterer
    field :provider
    field :insurer
    field :facility
    field :supportingInfo
    field :insurance
    field :item
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
