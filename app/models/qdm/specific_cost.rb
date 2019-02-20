module QDM
  # app/models/qdm/specific_cost.rb
  class SpecificCost < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :category
    field :benefit
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
