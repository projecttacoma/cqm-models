module QDM
  # app/models/qdm/fhir_substance_status.rb
  class FhirSubstanceStatus < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
