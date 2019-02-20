module QDM
  # app/models/qdm/moiety.rb
  class Moiety < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :role
    field :identifier
    field :name
    field :stereochemistry
    field :opticalActivity
    field :molecularFormula
    field :amount
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
