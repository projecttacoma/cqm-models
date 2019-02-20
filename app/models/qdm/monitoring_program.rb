module QDM
  # app/models/qdm/monitoring_program.rb
  class MonitoringProgram < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :type
    field :name
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
