module QDM
  # app/models/qdm/udi_carrier.rb
  class UdiCarrier < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :deviceIdentifier
    field :issuer
    field :jurisdiction
    field :carrierAIDC
    field :carrierHRF
    field :entryType
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
