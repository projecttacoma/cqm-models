module QDM
  # app/models/qdm/specimen_definition.rb
  class SpecimenDefinition < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier
    field :typeCollected
    field :patientPreparation
    field :timeAspect
    field :collection
    field :typeTested
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
