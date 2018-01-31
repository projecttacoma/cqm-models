class QDM::FacilityLocation
  include Mongoid::Document
  field :code, type: QDM::Code
  field :location_period, type: QDM::Interval
  field :qdm_version, type: String, default: '5.3'
end
