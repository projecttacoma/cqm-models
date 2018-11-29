# app/models/qdm/tacoma/provider_performance.rb
class ProviderPerformance
  include Mongoid::Document

  field :start_date, type: Integer
  field :end_date, type: Integer

  belongs_to :provider

  def shift_dates(date_diff)
    self.start_date = start_date.nil? ? nil : start_date + date_diff
    self.end_date = end_date.nil? ? nil : end_date + date_diff
  end
end
