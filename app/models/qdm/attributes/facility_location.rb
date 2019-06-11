module QDM
  # app/models/qdm/facility_location.rb
  class FacilityLocation < Attribute
    include Mongoid::Document
    field :code, type: QDM::Code
    field :locationPeriod, type: QDM::Interval
    field :qdmVersion, type: String, default: '5.4'

    def shift_years(year_shift)
      self.locationPeriod = locationPeriod.shift_years(year_shift)
      self
    end
  end
end
