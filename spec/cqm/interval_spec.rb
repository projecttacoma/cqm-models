require 'spec_helper'

RSpec.describe QDM::Interval do
  it 'shouldn\'t shift dates with a high past 9998' do
    dt_low = DateTime.new(2018, 10, 29, 9, 54, 0)
    dt_high = DateTime.new(9999, 12, 31, 23, 59, 59)

    # number of seconds to shift (4 years, plus 1 day for the leap year 2022)
    shift_seconds = 60 * 60 * 24 * (365 * 4 + 1)

    interval = QDM::Interval.new(dt_low, dt_high)

    interval.shift_dates(shift_seconds)

    expect(interval.high).to eq(dt_high)
    expect(interval.low).to eq(dt_low.next_year(4))
  end
end
