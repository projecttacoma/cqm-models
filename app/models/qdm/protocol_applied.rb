module QDM
  # app/models/qdm/protocol_applied.rb
  class ProtocolApplied < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :series
    field :authority
    field :targetDisease
    field :doseNumber
    field :seriesDoses
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
