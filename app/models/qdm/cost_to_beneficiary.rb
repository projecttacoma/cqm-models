module QDM
  # app/models/qdm/cost_to_beneficiary.rb
  class CostToBeneficiary < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :type
    field :value
    field :exception
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
