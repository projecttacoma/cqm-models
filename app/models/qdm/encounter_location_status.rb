module QDM
  # app/models/qdm/encounter_location_status.rb
  class EncounterLocationStatus < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
