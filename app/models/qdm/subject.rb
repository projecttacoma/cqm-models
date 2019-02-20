module QDM
  # app/models/qdm/subject.rb
  class Subject < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :reference
    field :role
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
