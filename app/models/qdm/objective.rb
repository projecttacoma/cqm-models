module QDM
  # app/models/qdm/objective.rb
  class Objective < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :name
    field :type
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
