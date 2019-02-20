module QDM
  # app/models/qdm/days_of_week.rb
  class DaysOfWeek < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
