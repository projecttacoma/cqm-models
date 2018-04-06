module QDM
  # app/models/qdm/participation.rb
  class Participation < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :participation_period, type: QDM::Interval
    field :qdm_version, type: String, default: '5.3'
  end
end
