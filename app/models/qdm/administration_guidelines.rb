module QDM
  # app/models/qdm/administration_guidelines.rb
  class AdministrationGuidelines < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :dosage
    field :indication
    field :patientCharacteristics
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
