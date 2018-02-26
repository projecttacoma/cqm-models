class QDM::Participation < QDM::DataElement
  include Mongoid::Document
  embedded_in :patient
  field :participation_period, type: QDM::Interval
  field :qdm_version, type: String, default: '5.3'
end
