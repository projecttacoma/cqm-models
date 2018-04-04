module QDM
  # app/models/qdm/facility_location.rb
  class FacilityLocation < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :code, type: QDM::Code
    field :location_period, type: QDM::Interval
    field :qdm_version, type: String, default: '5.3'
  end
end
