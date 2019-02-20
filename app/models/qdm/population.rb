module QDM
  # app/models/qdm/population.rb
  class Population < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :age
    field :gender
    field :race
    field :physiologicalCondition
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
