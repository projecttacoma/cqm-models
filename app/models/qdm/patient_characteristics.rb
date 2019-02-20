module QDM
  # app/models/qdm/patient_characteristics.rb
  class PatientCharacteristics < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :characteristic
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
