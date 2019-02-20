module QDM
  # app/models/qdm/participation_status.rb
  class ParticipationStatus < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
