module QDM
  # app/models/qdm/care_team.rb
  class CareTeam < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :sequence
    field :provider
    field :responsible
    field :role
    field :qualification
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
