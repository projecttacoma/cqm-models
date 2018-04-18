module QDM
  # app/models/qdm/participation.rb
  class Participation < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :participationPeriod, type: QDM::Interval
    field :qdmVersion, type: String, default: '5.3'
  end
end
