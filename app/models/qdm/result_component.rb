class QDM::ResultComponent < QDM::DataElement
  include Mongoid::Document
  embedded_in :patient
  field :reference_range, type: QDM::Interval
  field :qdm_version, type: String, default: '5.3'
end
