module QDM
  # app/models/qdm/dependent.rb
  class Dependent < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :name
    field :variable
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
