module QDM
  # app/models/qdm/handling.rb
  class Handling < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :temperatureQualifier
    field :temperatureRange
    field :maxDuration
    field :instruction
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
