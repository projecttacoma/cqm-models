module QDM
  # app/models/qdm/alternative.rb
  class Alternative < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :title
    field :description
    field :step
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
