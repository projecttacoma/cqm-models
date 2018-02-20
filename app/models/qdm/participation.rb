class QDM::Participation < QDM::Datatype
  include Mongoid::Document
  field :participation_period, type: QDM::Interval
  field :qdm_version, type: String, default: '5.3'
end
