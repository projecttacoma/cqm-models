module QDM
  # app/models/qdm/applicability.rb
  class Applicability < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :description
    field :language
    field :expression
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
