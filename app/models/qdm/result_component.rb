class QDM::ResultComponent < QDM::Datatype
  include Mongoid::Document
  field :reference_range, type: QDM::Interval
  field :qdm_version, type: String, default: '5.3'
end
