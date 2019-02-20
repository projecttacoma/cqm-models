module QDM
  # app/models/qdm/schedule.rb
  class Schedule < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :schedule
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
