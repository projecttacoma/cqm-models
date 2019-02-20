module QDM
  # app/models/qdm/causality.rb
  class Causality < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :assessment
    field :productRelatedness
    field :author
    field :method
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
