module QDM
  # app/models/qdm/remittance_outcome.rb
  class RemittanceOutcome < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
