module QDM
  # app/models/qdm/insurance_plan.rb
  class InsurancePlan < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier
    field :status
    field :type
    field :name
    field :alias
    field :period
    field :ownedBy
    field :administeredBy
    field :coverageArea
    field :contact
    field :endpoint
    field :network
    field :coverage
    field :plan
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
