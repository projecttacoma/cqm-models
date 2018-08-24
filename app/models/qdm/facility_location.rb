module QDM
  # app/models/qdm/facility_location.rb
  class FacilityLocation < DataElement
    include Mongoid::Document
    field :code, type: QDM::Code
    field :locationPeriod, type: QDM::Interval
    field :qdmVersion, type: String, default: '5.3'
  end
end
