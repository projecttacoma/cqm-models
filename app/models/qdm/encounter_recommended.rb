module QDM
  # app/models/qdm/encounter_recommended.rb
  class EncounterRecommended < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :author_datetime, type: DateTime
    field :reason, type: QDM::Code
    field :facility_location, type: QDM::Code
    field :negation_rationale, type: QDM::Code
    field :hqmf_oid, type: String, default: '2.16.840.1.113883.10.20.28.3.28'
    field :category, type: String, default: 'encounter'
    field :qdm_status, type: String, default: 'recommended'
    field :qdm_version, type: String, default: '5.3'
    field :class_name, type: String, default: 'EncounterRecommended'
  end
end
