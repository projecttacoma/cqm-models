module QDM
  # app/models/qdm/population1.rb
  class Population1 < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :code
    field :count
    field :subjectResults
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
