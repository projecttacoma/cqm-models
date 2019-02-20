module QDM
  # app/models/qdm/immunization_recommendation.rb
  class ImmunizationRecommendation < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier
    field :patient
    field :date
    field :authority
    field :recommendation
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
