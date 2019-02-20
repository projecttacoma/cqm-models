module QDM
  # app/models/qdm/sample_size.rb
  class SampleSize < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :description
    field :numberOfStudies
    field :numberOfParticipants
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
