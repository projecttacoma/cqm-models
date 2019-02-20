module QDM
  # app/models/qdm/repeat.rb
  class Repeat < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :bounds
    field :count
    field :countMax
    field :duration
    field :durationMax
    field :durationUnit
    field :frequency
    field :frequencyMax
    field :period
    field :periodMax
    field :periodUnit
    field :dayOfWeek
    field :timeOfDay
    field :when
    field :offset
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
