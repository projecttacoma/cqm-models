module QDM
  # app/models/qdm/fhir_version.rb
  class FhirVersion < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
