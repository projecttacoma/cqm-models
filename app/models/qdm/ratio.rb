class QDM::Ratio < QDM::DataElement
  include Mongoid::Document
  embedded_in :patient
  field :numerator, type: QDM::Quantity
  field :denominator, type: QDM::Quantity
  field :qdm_version, type: String, default: '5.3'
end