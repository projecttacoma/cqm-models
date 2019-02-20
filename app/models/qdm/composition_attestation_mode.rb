module QDM
  # app/models/qdm/composition_attestation_mode.rb
  class CompositionAttestationMode < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
