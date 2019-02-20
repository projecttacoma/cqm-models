module QDM
  # app/models/qdm/oral_diet.rb
  class OralDiet < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :type
    field :schedule
    field :nutrient
    field :texture
    field :fluidConsistencyType
    field :instruction
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
