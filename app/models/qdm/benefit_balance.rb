module QDM
  # app/models/qdm/benefit_balance.rb
  class BenefitBalance < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :category
    field :excluded
    field :name
    field :description
    field :network
    field :unit
    field :term
    field :financial
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
