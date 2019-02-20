module QDM
  # app/models/qdm/medication.rb
  class Medication < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier
    field :code
    field :status
    field :manufacturer
    field :form
    field :amount
    field :ingredient
    field :batch
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
