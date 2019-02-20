module QDM
  # app/models/qdm/specified_substance.rb
  class SpecifiedSubstance < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :code
    field :group
    field :confidentiality
    field :strength
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
