module QDM
  # app/models/qdm/care_team_status.rb
  class CareTeamStatus < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
