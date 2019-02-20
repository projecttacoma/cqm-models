module QDM
  # app/models/qdm/hours_of_operation.rb
  class HoursOfOperation < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :daysOfWeek
    field :allDay
    field :openingTime
    field :closingTime
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
