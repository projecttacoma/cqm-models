module QDM
  # app/models/qdm/plan.rb
  class Plan < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier
    field :type
    field :coverageArea
    field :network
    field :generalCost
    field :specificCost
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
