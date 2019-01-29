module CQM
  class ProviderPerformance
    include Mongoid::Document
    
    embedded_in :patient

    field :start_date, type: Integer
    field :end_date, type: Integer
    
    belongs_to :provider

    def shift_dates(date_diff)
      self.start_date = self.start_date.nil? ? nil : self.start_date + date_diff
      self.end_date = self.end_date.nil? ? nil : self.end_date + date_diff
    end
  end
end