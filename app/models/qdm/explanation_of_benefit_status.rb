module QDM
  # app/models/qdm/explanation_of_benefit_status.rb
  class ExplanationOfBenefitStatus < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
