module QDM
  # app/models/qdm/available_time.rb
  class AvailableTime < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :daysOfWeek
    field :allDay
    field :availableStartTime
    field :availableEndTime
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
