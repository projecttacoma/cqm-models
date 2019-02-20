module QDM
  # app/models/qdm/designation.rb
  class Designation < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :language
    field :use
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
