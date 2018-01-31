class QDM::Ratio
  include Mongoid::Document
  field :numerator, type: QDM::Quantity
  field :denominator, type: QDM::Quantity
  field :qdm_version, type: String, default: '5.3'
end
