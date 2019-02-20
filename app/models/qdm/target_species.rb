module QDM
  # app/models/qdm/target_species.rb
  class TargetSpecies < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :code
    field :withdrawalPeriod
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
