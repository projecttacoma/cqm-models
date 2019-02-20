module QDM
  # app/models/qdm/adjudication.rb
  class Adjudication < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :category
    field :reason
    field :amount
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
