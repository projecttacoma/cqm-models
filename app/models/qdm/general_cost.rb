module QDM
  # app/models/qdm/general_cost.rb
  class GeneralCost < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :type
    field :groupSize
    field :cost
    field :comment
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
