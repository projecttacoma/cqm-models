module QDM
  # app/models/qdm/fraction_description.rb
  class FractionDescription < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :fraction
    field :materialType
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
