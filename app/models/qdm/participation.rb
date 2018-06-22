module QDM
  # app/models/qdm/participation.rb
  class Participation < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :participationPeriod, type: QDM::Interval
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.4.130'
    field :category, type: String, default: 'participation'
    field :qdmVersion, type: String, default: '5.3'
  end
end
