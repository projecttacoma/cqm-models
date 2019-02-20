module QDM
  # app/models/qdm/episode_of_care_status.rb
  class EpisodeOfCareStatus < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
