module QDM
  # app/models/qdm/facility_location.rb
  class FacilityLocation < Attribute
    include Mongoid::Document
    field :code, type: QDM::Code
    field :locationPeriod, type: QDM::Interval
    field :qdmVersion, type: String, default: '5.4'

    def shift_years(year_shift)
      shifted_year_low = locationPeriod[:low].year + year_shift
      shifted_year_high = locationPeriod[:high].year + year_shift
      if locationPeriod[:low].month == 2 && locationPeriod[:low].day == 29 && !Date.leap?(shifted_year_low)
        locationPeriod[:low].change(year: shifted_year_low, day: 28)
      else
        locationPeriod[:low].change(year: shifted_year_low)
      end
      if locationPeriod[:high].month == 2 && locationPeriod[:high].day == 29 && !Date.leap?(shifted_year_high)
        locationPeriod[:high].change(year: shifted_year_high, day: 28)
      else
        locationPeriod[:high].change(year: shifted_year_high)
      end
    end
  end
end
